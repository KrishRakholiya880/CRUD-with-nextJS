import axios from "axios";

export const metadata = {
  title: "About",
  description:
    "Discover the story behind our brand and our journey to becoming your most trusted online shopping destination.",
  keyword: ["about", "about MyShop", "MyShop", "our journey", "brand"],
};

export default async function About() {
  const res = await axios.get("http://localhost:3000/api/userdata");
  const products = res.data;

  return (
    <main className="w-full flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl">About Page</h1>
      <p className="max-w-2xl mx-auto text-slate-400 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        dolore earum expedita rem nam laborum voluptas nesciunt enim quis
        maiores.
      </p>
      <div className="mt-12">
        <p className="text-2xl mb-3">Userdata from NextJS API</p>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-start w-full md:w-6/12 lg:w-3/12 p-4 border-2 rounded-2xl border-slate-300">
              <li>Firts Name: {item?.first_name}</li>
              <li>Email: {item?.email}</li>
              <li>Gender: {item?.gender}</li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
}
