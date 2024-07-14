import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/cameraStorelogo.png" alt="logo" width={100} height={100} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">My Project List</Link>
    </nav>
  );
}

export default NavBar;
