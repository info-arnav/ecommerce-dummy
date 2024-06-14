"use server";
import { cookies } from "next/headers";

export default async function loginFunc(email) {
  await cookies().set("user", email);
}
