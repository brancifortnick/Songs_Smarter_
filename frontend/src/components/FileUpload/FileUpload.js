
import styles from "./FileUpload.module.css";
import React, { Fragment, useEffect, useState } from "react";


const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].title); //*songs will have title//
  };

  // useEffect(()=> {

  // })

  return (
    <Fragment>
      <form>
        <div className="file-upload mb-4">
          <input
            id="addFile"
            type="file"
            className="file-upload-input"
            onChange={onChange}
          />
          <label className={styles.heading} htmlFor="addFile">
            {fileName}
          </label>
        </div>
        <input
          className="btn btn-primary btn-block mt-4"
          type="submit"
          value="Upload"
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
