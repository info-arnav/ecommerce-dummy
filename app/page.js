import { cookies } from "next/headers";
import Link from "next/link";

async function getProducts() {
  let data;
  try {
    data = await fetch(`${process.env.SERVER}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => {
      return e.json();
    });
  } catch (err) {
    data = [];
  }
  return data;
}

export default async function Home() {
  const cookieStore = cookies();
  const userCokkie = cookieStore.get("user");
  const data = await getProducts();
  return (
    <main style={{ marginTop: 10 }}>
      {userCokkie ? (
        <>
          <p>Logged in as -</p>
          <p>Name: {userCokkie?.name}</p>
          <p>Value: {userCokkie?.value}</p>
        </>
      ) : (
        "Not Logged in"
      )}
      <div style={{ marginTop: 50, marginBottom: 50 }}>Products : </div>
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
              <Link
                href={`/product/${e.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "right",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <div>{e.title}</div>
                <div>{e.description}</div>
              </Link>
            );
          })}
      </div>
    </main>
  );
}
