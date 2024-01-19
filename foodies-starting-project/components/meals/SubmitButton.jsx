"use client";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import classes from "./SubmitButton.module.css";

export default function SubmitButton() {
  const status = useFormStatus();
  return (
    <p className={classes.actions}>
      <button
        type="submit"
        className={`${classes.button}`}
        disabled={status.pending}
      >
        Share Meal
        {status.pending ? (
          <div className={`${classes.loading}`}>
            <AiOutlineLoading3Quarters />
          </div>
        ) : null}
      </button>
    </p>
  );
}
