"use client";

import logoutFunc from "./logout_func";

export default function Button() {
  return (
    <button
      onClick={async () => {
        await logoutFunc();
        window.location.reload();
      }}
      style={{
        textDecoration: "none",
        fontWeight: "bold",
        color: "black",
        border: "solid black",
        borderRadius: 20,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
}
