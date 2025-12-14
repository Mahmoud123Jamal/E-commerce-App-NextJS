import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  productImg: string;
}

async function getData(id: string): Promise<Product> {
  const res = await fetch(`http://localhost:4000/products/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const objData = await getData(id);
  return {
    title: objData.title,
    description: objData.description,
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const objData = await getData(id);

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="flex flex-wrap max-w-3xl mx-auto  bg-white rounded-md shadow-2xl p-4 items-center gap-6 my-10">
        <div className="relative w-full md:w-2/5 h-[270px]">
          <Image
            fill
            quality={100}
            alt={objData.title}
            src={objData.productImg}
            className="rounded-md object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">{objData.title}</h2>
            <p className="text-red-600 font-semibold text-lg">
              ${objData.price}
            </p>
          </div>

          <p className="text-left mb-4 leading-relaxed text-gray-600">
            {objData.description}
          </p>

          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            <FontAwesomeIcon icon={faCartPlus} className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
