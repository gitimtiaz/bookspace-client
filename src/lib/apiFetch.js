const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export async function apiFetch(path, options = {}) {
  const { body, ...rest } = options;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  const data = await res.json();

  if (!res.ok) {
    const message = data?.message || "Something went wrong.";
    throw new Error(message);
  }

  return data;
}
