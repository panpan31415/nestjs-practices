import ImagePicker from "./image-picker";
import { shareMeal } from "@/lib/actions";
import classes from "./meals-submit-form.module.css";
import SubmitButton from "./SubmitButton";
export default function MealsSubmitForm() {
  return (
    <form className={classes.form} action={shareMeal}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
        ></textarea>
      </p>
      <ImagePicker name={"image"} label={"Your Image"} />
      <SubmitButton />
    </form>
  );
}
