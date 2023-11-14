import React from "react";
import "../styles/SectionTitle.css";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="section-title-container">
      <h1 className="section-title">{title}</h1>
    </div>
  );
};

export default SectionTitle;
