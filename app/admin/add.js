"use client";

import { useState } from "react";

export default function Add({ name, server }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h1 style={{ marginTop: 30, marginBottom: 30 }}>Add Item</h1>

      <input
        style={{ marginBottom: 10, borderRadius: 20, padding: 10 }}
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        style={{ marginBottom: 10, borderRadius: 20, padding: 10 }}
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        style={{ marginBottom: 10, borderRadius: 20, padding: 10 }}
        placeholder="file"
        type="file"
        onChange={(e) => {
          const formData = new FormData();
          setImage(e.target.files[0]);
        }}
      ></input>
      <button
        style={{
          cursor: "pointer",
          marginBottom: 20,
          borderRadius: 20,
          padding: 10,
        }}
        onClick={async (e) => {
          setLoading(true);
          const formData = new FormData();
          formData.append("name", name);
          formData.append("title", title);
          formData.append("description", description);
          if (image) {
            formData.append("image", image);
          }
          let data = await fetch(`${server}/api/create`, {
            method: "POST",
            body: formData,
          }).then((e) => {
            return e.json();
          });
          setLoading(false);
          window.location.reload();
        }}
      >
        {loading ? "loading...." : "Add Product"}
      </button>
    </div>
  );
}
