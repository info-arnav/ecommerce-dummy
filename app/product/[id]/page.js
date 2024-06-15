import Add from "./add";
import { cookies } from "next/headers";

async function getProducts(id) {
  let data;
  try {
    data = await fetch(`${process.env.SERVER}/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    }).then((e) => {
      return e.json();
    });
  } catch (err) {
    data = {};
  }
  return data;
}

export default async function Home({ params }) {
  const cookieStore = cookies();
  const userCokkie = cookieStore.get("user");
  const data = await getProducts(params.id);
  return (
    <main style={{ marginTop: 10 }}>
      <div style={{ marginTop: 50, marginBottom: 50 }}>Product Details : </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <div>{data.id}</div>
          <div>{data.title}</div>
          <div>{data.description}</div>
        </div>
        <Add
          id={params.id}
          name={userCokkie?.value}
          server={process.env.SERVER}
        ></Add>
      </div>
    </main>
  );
}
