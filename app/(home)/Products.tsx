import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types/products";

async function getData() {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //simulates loading data
  const res = await fetch("http://localhost:4000/products", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const Products = async () => {
  const arrData = await getData();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {arrData.map((item: Product) => (
        <article
          key={item.id}
          title={item.title}
          className="bg-white rounded-lg shadow-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <Link href={`/product-details/${item.id}`}>
            <Image
              src={item.productImg}
              alt={item.title}
              width={266}
              height={260}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </Link>

          <div className="p-4 flex flex-col justify-between h-48">
            <h1 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title.length > 15
                ? item.title.slice(0, 15) + "..."
                : item.title}
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              {item.description.length > 111
                ? item.description.slice(0, 111) + "..."
                : item.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                ${item.price}
              </span>
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition">
                <FontAwesomeIcon icon={faCartPlus} className="w-4" />
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
