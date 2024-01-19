"use server";
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

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  console.log(meal);
}
