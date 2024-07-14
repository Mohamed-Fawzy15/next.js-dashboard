import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex
        doloremque, earum placeat, laudantium, architecto repudiandae
        voluptatibus beatae ut veniam labore ea repellendus possimus praesentium
        tempora. Quas eligendi dolores provident!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex
        doloremque, earum placeat, laudantium, architecto repudiandae
        voluptatibus beatae ut veniam labore ea repellendus possimus praesentium
        tempora. Quas eligendi dolores provident!
      </p>
      <Link href="/projects" className={styles.btn}>
        See All My Projects
      </Link>
    </div>
  );
}

// this is the new way to change the title in next.js for each page

export const metadata = {
  title: "Mohamed Fawzy | Home",
  description: "Portfolio",
};
