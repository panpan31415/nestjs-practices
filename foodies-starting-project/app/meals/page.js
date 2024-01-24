import { Fragment } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Meals from "@/components/meals";

// page level meta data
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

export default function MealPage() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it for yourself. It is easy and
          fun.
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Meals />
      </main>
    </Fragment>
  );
}
