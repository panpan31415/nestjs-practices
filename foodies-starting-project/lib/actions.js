"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meal";
import { revalidatePath } from "next/cache";

// "user server" means all the functions in this file
// will be treated as Server Actions

// you are not allowed to put a server function in a
// client component, instead you should put them in a
// separate file

// you can put a server action inside a server-side
// component file, but NextJS is not able to separate
// the function and component in a clean way. The
// server-side code can be exposed to client side which
// could pose security issues.

// So technically you can put server actions in a
// server-side rendered component file, in practice
// you should not do that. you should always import a
// server action to another component.

function isInValidText(text) {
  if (!text || text.trim() === "") {
    return true;
  }
  return false;
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalid input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout"); // when you update your db, you should revalidate the meals path, which means clear catch on this path. the default value of second
  // parameter is "page", that means the page under the path "/meals" will be revalidated, if you change to "layout" that means the sub pages will also be revalidated.
  await redirect("/meals");
}
