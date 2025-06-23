import React from "react";
import "../App.css";

const DownloadButton = () => {
  return (
    <div className="mt-5">
      <a
        href="/documents/Frendl_Resume2.pdf"
        download
        className="resume-button"
        role="button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;
