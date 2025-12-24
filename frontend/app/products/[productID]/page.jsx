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
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src={productData.images[0]}
              fill
              quality={100}
              className="object-contain"
              alt="productImage"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-3 text-base sm:text-lg lg:text-xl">
          <p>
            <b>Title:</b> {productData.title}
          </p>

          <p>
            <b>Description:</b> {productData.description}
          </p>

          <p>
            <b>Category:</b> {productData.category}
          </p>

          <p>
            <b>Rating:</b> ⭐ {productData.rating}
          </p>

          <p className="text-2xl font-semibold">${productData.price}</p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-6 py-3 text-base lg:text-lg text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-xl">
              Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
