// `app/module/page.js` is the UI for the `/dashboard` URL
import ProductCard from "@/components/Users/ProductCard";

async function getData() {
  const res = await fetch("http://localhost:5000/allproduct");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default async function Page() {
  const data = await getData();
  return (
    <>
      <h1>Hello, All Products Page!</h1>
      {!!data &&
        data.map((item) => {
          return (
            <ProductCard
              key={item._id}
              productImgSrc={item.image}
              productTitle={item.title}
              productId={item._id}
            />
          );
        })}
    </>
  );
}
