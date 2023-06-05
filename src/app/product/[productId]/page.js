"use client";
// `app/product/[productId]/page.js` is the UI for the `/[productId]` URL


import { useParams } from "next/navigation";

// wrap this function in usestate hook or in getStaticprpos according to need
// this function returns all the modules related to the product with Id = [productId]
async function getData(productId) {
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productid: productId,
    }),
    redirect: "follow",
  };
  const res = await fetch("http://localhost:5000/sendmodule", requestOptions);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Page() {
  const params = useParams();
  console.log(params);
  // Route -> /product/[productId]
  const productId = params.productId;
  const data = await getData(productId);
  console.log(data);

  return (
    <>
      <h1>Hello, Dynamic ProductId Page to get all its Modules !</h1>
      {!!data && data.map( item =>
        <div key={item._id}>
          <p>{item.topic}</p>
          <p>{item.description}</p>
          <img src={item.image} alt="image" style={{width: "300px"}}></img>
        </div>
      )}
    </>
  );
}
