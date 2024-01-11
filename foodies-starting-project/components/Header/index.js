import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./index.module.css";
import Image from "next/image";
import HeaderBackground from "./Background";
import { Fragment } from "react";
export default function Header() {
  return (
    <Fragment>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* priority: tells NextJs to load the image ASAP, do not use lay loading method on this image  */}
          <Image src={logoImg} alt="A plate of food" priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
