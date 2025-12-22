// Image component
import Image from "next/image";
// Link
import Link from "next/link";

async function getProduct(productID) {
  const res = await fetch(`https://dummyjson.com/products/${productID}`, {
    cache: "force-cache",
  });
  return res.json();
}

// metadata
export async function generateMetadata({ params }) {
  const { productID } = await params;

  const productData = await getProduct(productID);

  return {
    title: productData.title,
    description: productData.description,

    openGraph: {
      title: productData.title,
      description: productData.description,
      images: [
        {
          url: productData.thumbnail,
          width: 800,
          height: 600,
          alt: productData.title,
        },
      ],
    },

    alternates: {
      canonical: `/products/${productID}`,
    },
  };
}

export default async function ProductID({ params }) {
  // Get productID from params
  const { productID } = await params;

  // Fetching data of productID
  const productData = await getProduct(productID);

  return (
    <main className="max-w-9xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-6/12 px-3">
          <div className="relative aspect-square">
            <Image
              src={productData.images[0]}
              fill
              quality={100}
              className="w-full h-full object-contain"
              alt="productImage"
            />
          </div>
        </div>
        <div className="w-full lg:w-6/12 text-2xl flex flex-col space-y-4 px-3">
          <p>
            <b>Title: </b>
            {productData.title}
          </p>
          <p>
            <b>Description: </b>
            {productData.description}
          </p>
          <p>
            <b>Category: </b>
            {productData.category}
          </p>
          <p>
            <b>Rating: </b>
            {productData.rating}
          </p>
          <p className="mb-4">
            <b>Price: </b>
            {productData.price}
          </p>
          <div>
            <Link
              href={"/"}
              className="text-xl px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl">
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
