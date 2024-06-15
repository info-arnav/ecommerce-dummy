"use client";

import { useState } from "react";

export default function Remove({ name, id, server }) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      style={{ cursor: "pointer", marginBottom: 20 }}
      onClick={async (e) => {
        setLoading(true);
        let data = await fetch(`${server}/api/remove`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id, name: name }),
        }).then((e) => {
          return e.json();
        });
        setLoading(false);
        window.location.reload();
      }}
    >
      {loading ? "loading...." : "Remove from cart"}
    </button>
  );
}
