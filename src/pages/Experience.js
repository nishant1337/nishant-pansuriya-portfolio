import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import CertificateIcon from "@material-ui/icons/School";

import "../styles/Experience.css";
import {
  educationEntries,
  workExperienceEntries,
  certificationsEntries,
} from "./ExperienceData.js";

function Experience() {
  // Combine all entries and sort by date
  const allEntries = [...educationEntries, ...workExperienceEntries].sort((a, b) => {
    const aStartYear = parseInt(a.date.split(" - ")[0].split(" ")[1]);
    const bStartYear = parseInt(b.date.split(" - ")[0].split(" ")[1]);
    return bStartYear - aStartYear;
  });

  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <div className="experience">
      <div className="toggle-button">
        <button onClick={() => setShowCertifications(!showCertifications)}>
          {showCertifications ? "Hide Certifications" : "Show Certifications"}
        </button>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        {!showCertifications &&
          allEntries.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              className={
                entry.iconName === "school" ? "vertical-timeline-element--education" : "vertical-timeline-element--work"
              }
              date={entry.date}
              iconStyle={{
                background: entry.iconName === "school" ? "#3e497a" : "#e9d35b",
                color: "#fff",
              }}
              icon={entry.iconName === "school" ? <SchoolIcon /> : <WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {entry.university || entry.location || entry.organization}
              </h4>
              {entry.description && (
                <ul className="bullet-list">
                  {entry.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              {entry.percentage && (
                <div className="education-percentage">
                  <p>Percentage: {entry.percentage}</p>
                </div>
              )}
              {entry.verificationLink && (
                <a href={entry.verificationLink} target="_blank" rel="noopener noreferrer">
                  <button className="verify-button">Verify</button>
                </a>
              )}
            </VerticalTimelineElement>
          ))}
        {showCertifications &&
          certificationsEntries.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={entry.date}
              iconStyle={{
                background: "#3e497a",
                color: "#fff",
              }}
              icon={<CertificateIcon />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.organization}</h4>
              {entry.description && (
                <ul className="bullet-list">
                  {entry.description.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
              {entry.verificationLink && (
                <a href={entry.verificationLink} target="_blank" rel="noopener noreferrer">
                  <button className="verify-button">Verify</button>
                </a>
              )}
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
