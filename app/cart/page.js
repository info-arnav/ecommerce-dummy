import { cookies } from "next/headers";
import Link from "next/link";
import Remove from "./remove";

async function getProducts(name) {
  let data;
  try {
    data = await fetch(`${process.env.SERVER}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
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
  const data = await getProducts(userCokkie?.value);
  return (
    <main style={{ marginTop: 10 }}>
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        Cart Product Details :{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
          justifyContent: "center",
        }}
      >
        {Array.isArray(data) &&
          data.map((e) => {
            return (
              <>
                <Link
                  href={`/product/${e.id}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "right",
                    justifyContent: "center",
                  }}
                >
                  <div>{e.title}</div>
                  <div>{e.description}</div>
                </Link>
                <Remove
                  id={e.id}
                  name={userCokkie?.value}
                  server={process.env.SERVER}
                ></Remove>
              </>
            );
          })}
      </div>
    </main>
  );
}
