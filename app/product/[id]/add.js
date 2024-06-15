"use client";

import { useState } from "react";

export default function Add({ name, id, server }) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      style={{ cursor: "pointer" }}
      onClick={async (e) => {
        setLoading(true);
        let data = await fetch(`${server}/api/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id, name: name }),
        }).then((e) => {
          return e.json();
        });
        setLoading(false);
      }}
    >
      {loading ? "loading...." : "Add To Cart"}
    </button>
  );
}
