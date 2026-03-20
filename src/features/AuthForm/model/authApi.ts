import type {
  AuthDataType,
  AuthOptionsType,
} from "@features/AuthForm/model/types";

export async function fetchLogin({
  username,
  password,
}: AuthOptionsType): Promise<AuthDataType | null> {
  const response = await fetch(import.meta.env.VITE_PUBLIC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (data.message) {
    throw Error(data.message);
  }

  return data;
}
