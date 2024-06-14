"use server";
import { cookies } from "next/headers";

export default async function logoutFunc() {
  await cookies().delete("user");
}
