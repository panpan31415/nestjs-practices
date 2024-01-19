import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, {
    lower: true, // specify all characters to be lowercase.
  });

  meal.instructions = xss(meal.instructions); // sanitize all the instructions that typed by user

  // store image to public folder
  console.log(meal.image);
  const fileExtension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${fileExtension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  // after saving file to public folder
  // we update image with image path.
  // by default all the request will land on public
  // folder, so we don't need to add "public" to the path
  meal.image = `/images/${fileName}`;

  db.prepare(
    `
  INSERT INTO meals
  (title, summary, instructions, creator, creator_email, image, slug) VALUES (
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )
  `
  ).run(meal);
}
