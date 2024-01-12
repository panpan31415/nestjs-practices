import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./index.module.css";
import Image from "next/image";
import HeaderBackground from "./Background";
import { Fragment } from "react";
import NavLink from "./NavLink";
export default function Header() {
  return (
    <Fragment>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* priority: tells NextJs to load the image ASAP, do not use
           lay loading method on this image  */}
          <Image src={logoImg} alt="A plate of food" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}> Browse meals </NavLink>
            </li>
            <li>
              <NavLink href={"/community"}> Foodies Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
