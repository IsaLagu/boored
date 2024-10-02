import React, { useState, useEffect } from "react";
import "./filter.css";
import { Tag } from "../../components/tag/Tag";

export const Filter = ({ value, onChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="tag-list">
      <Tag selected={value === "social"} onClick={() => onChange("social")}>
        Social
      </Tag>
      <Tag selected={value === "education"} onClick={() => onChange("education")}>
        Educació
      </Tag>
      <Tag selected={value === "charity"} onClick={() => onChange("charity")}>
        Caritat
      </Tag>
      <Tag selected={value === "cooking"} onClick={() => onChange("cooking")}>
        Cuinar
      </Tag>
      {!isMobile && (
        <>
          <Tag selected={value === "relaxation"} onClick={() => onChange("relaxation")}>
            Relaxació
          </Tag>
          <Tag selected={value === "busywork"} onClick={() => onChange("busywork")}>
            Treball intens
          </Tag>
        </>
      )}
    </div>
  );
};
