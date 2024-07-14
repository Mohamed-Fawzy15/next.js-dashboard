"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";

type User = {
  id: number;
  name: string;
  email: string;
  website: string;
  address: {
    city: string;
  };
};

export default function Page() {
  const pathName = usePathname();
  const [id, setId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const pathParts = pathName.split("/");
    const id = pathParts[pathParts.length - 1];
    setId(id);
  }, [pathName]);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data: User = await response.json();
        setUser(data);
      };
      fetchUser();
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>{user ? `${user.name} | Nourhan Fawzy` : "Loading..."}</title>
        <meta
          name="description"
          content={user ? `Details about ${user.name}` : "Loading..."}
        />
      </Head>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>{user?.website}</p>
      <p>{user?.address.city}</p>
    </div>
  );
}
