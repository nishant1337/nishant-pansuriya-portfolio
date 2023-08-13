import React from "react";
import resumepdf from "../assets/resume.pdf";

const iframeStyles = {
  width: "100%",
  height: "100vh", // Adjust the height based on your preference
  border: "none",
  overflow: "hidden", // Hide the scrollbar
};

function Resume() {
  return (
    <div className="resume">
      <iframe
        src={resumepdf}
        title="Resume"
        style={iframeStyles}
      ></iframe>
    </div>
  );
}

export default Resume;
