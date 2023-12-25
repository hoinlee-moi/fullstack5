import Link from "next/link";
import clsx from "clsx";

import "./page.css";
const NavBar = () => {
  return (
    <nav className={clsx("navbar")}>
      <Link href={"/"}>Home</Link>
      <Link href={"/my"}>My</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/cart"}>Cart</Link>
    </nav>
  );
};

export default NavBar;
