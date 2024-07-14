import Link from "next/link";
import styles from "../../styles/Projects.module.css";

type User = {
  id: number;
  name: string;
  // Add any other properties you need
};

export default async function Projects() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div>
      <h1>My Projects</h1>

      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/projects/${user.id}`} className={styles.single}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export const metadata = {
  title: "Mohamed Fawzy | Projects",
  description: "Portfolio",
};
