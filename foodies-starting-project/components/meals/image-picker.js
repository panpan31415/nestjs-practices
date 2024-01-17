"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImages, setPickedImages] = useState([]);
  const imageInputRef = useRef();

  const onImageChange = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    for (let index = 0; index < files.length; index++) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImages((pickedImages) => [...pickedImages, fileReader.result]);
      };
      fileReader.readAsDataURL(files[index]);
    }
  };

  const onClick = () => {
    imageInputRef.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}> {label}</label>
      <div className={classes.controls}>
        <div className={classes["preview-container"]}>
          {pickedImages.length > 0 ? (
            pickedImages.map((file, index) => (
              <div className={classes.preview} key={index}>
                <Image src={file} fill alt={"user selected file: " + index} />
              </div>
            ))
          ) : (
            <div className={classes.preview}>
              <p>No image selected yet.</p>
            </div>
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/Webp"
          name={name}
          multiple={true}
          ref={imageInputRef}
          onChange={onImageChange}
        />
        {/* if type is submit, it will cause the form to send an post request */}
        <button type="button" className={classes.button} onClick={onClick}>
          select an image
        </button>
      </div>
    </div>
  );
}
