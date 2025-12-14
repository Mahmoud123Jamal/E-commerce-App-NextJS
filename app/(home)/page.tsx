import { Suspense } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Products from "./Products";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-center bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: "url(/images/bac.jpg)" }}
      >
        <Header />
        <section className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col text-white text-2xl space-y-2 sm:text-xl">
          <p className="uppercase text-2xl sm:text-xl">Lifestyle collection</p>
          <p className="mt-2 font-bold text-3xl sm:text-2xl">MEN</p>
          <p className="mt-1 font-bold text-2xl sm:text-xl">
            SALE UP TO <span className="text-crimson ml-2">30% OFF</span>
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
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
