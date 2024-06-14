import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const userCokkie = cookieStore.get("user");
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
    </main>
  );
}
