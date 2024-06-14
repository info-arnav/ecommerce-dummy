"use client";

import { useState } from "react";
import loginFunc from "../login_func";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const evaluate = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = await fetch(`http://localhost:5000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone,
      }),
    }).then((e) => {
      return e.json();
    });
    if (data.loggedIn) {
      await loginFunc(email);
      window.location.replace("/");
    } else {
      setError(true);
    }
    setLoading(false);
  };
  return (
    <main
      style={{
        marginTop: 10,
        display: "flex",
        minHeight: "calc(100vh - 80px)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={evaluate}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100%",
        }}
      >
        <h1 style={{ fontSize: 32 }}>Register</h1>
        <input
          style={{
            width: "calc(100% - 20px)",
            maxWidth: 500,
            borderRadius: 20,
            height: 40,
            marginTop: 40,
            padding: 10,
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
        ></input>
        <input
          style={{
            width: "calc(100% - 20px)",
            maxWidth: 500,
            borderRadius: 20,
            height: 40,
            marginTop: 20,
            padding: 10,
          }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone number"
          type="number"
        ></input>
        <input
          style={{
            width: "calc(100% - 20px)",
            maxWidth: 500,
            borderRadius: 20,
            height: 40,
            marginTop: 20,
            padding: 10,
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        ></input>
        <input
          style={{
            width: "calc(100% - 20px)",
            maxWidth: 500,
            borderRadius: 20,
            height: 40,
            marginTop: 20,
            padding: 10,
            marginBottom: 10,
          }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
          type="password"
        ></input>
        {error && <p style={{ color: "red" }}>Some error occured</p>}
        <button
          style={{
            width: "calc(100% - 20px)",
            maxWidth: 500,
            borderRadius: 20,
            height: 40,
            marginTop: 20,
            padding: 10,
            cursor: "pointer",
          }}
          type="submit"
        >
          {loading ? "Loading...." : "Register"}
        </button>
      </form>
    </main>
  );
}
