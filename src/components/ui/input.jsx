"use client";

export function Input({ id, type = "text", placeholder, className }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`border p-2 rounded-md ${className}`}
    />
  );
}
