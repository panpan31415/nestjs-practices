import { Fragment } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meal";
import { notFound } from "next/navigation";

// add dynamic meta data
export async function generateMetadata({ params }) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`${process.env.AWS_BUCKET_FOLDER}${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by
            <a href={`mailto:${meal.creator_email}`} type="email">
              {" " + meal.creator}
            </a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </Fragment>
  );
}
