import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "./loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const Products = dynamic(() => import("../components/Products"), {
  ssr: true,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: "url(/images/bac.jpg)" }}
      >
        <Header />
        <section className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col text-black text-2xl space-y-2 sm:text-xl">
          <p className="uppercase text-2xl sm:text-xl">Lifestyle collection</p>
          <p className="mt-2 font-bold text-3xl sm:text-2xl">MEN</p>
          <p className="mt-1 font-bold text-2xl sm:text-xl">
            SALE UP TO <span className="text-red-600 ml-2">30% OFF</span>
          </p>
          <p className="text-xl sm:text-lg mt-1">
            Get Free Shipping on orders over $99.00
          </p>
          <button className="mt-3 bg-black text-white text-sm px-6 py-2 rounded-sm hover:bg-gray-800 transition">
            Shop Now
          </button>
        </section>
      </div>

      <main className="px-6 py-12">
        <h1 className="flex items-center text-2xl font-semibold mb-6">
          <FontAwesomeIcon icon={faCheck} className="w-6 mr-4 text-green-500" />
          Recommended for you
        </h1>
        <Products />
      </main>

      <Footer />
    </>
  );
}
