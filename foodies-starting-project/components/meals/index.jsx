import { getMeals } from "@/lib/meal";
import MealsGrid from "./meals-grid";
import classes from "./index.module.css";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function LoadMeals() {
  return (
    <Suspense fallback={<p className={classes.loading}> loading...</p>}>
      <Meals />
    </Suspense>
  );
}
