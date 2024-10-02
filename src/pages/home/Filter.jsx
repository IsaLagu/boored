import React, { useState, useEffect } from "react";
import "./filter.css";
import { Tag } from "../../components/tag/Tag";

export const Filter = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // 768px es un punto de quiebre común para móvil
  };

  useEffect(() => {
    handleResize(); // Verifica el tamaño inicial
    window.addEventListener("resize", handleResize); // Escucha cambios en el tamaño de la ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento
    };
  }, []);

  return (
    <div className="tag-list">
      <Tag>Social</Tag>
      <Tag>Educació</Tag>
      <Tag>Caritat</Tag>
      <Tag>Cuinar</Tag>
      {!isMobile && (
        <>
          <Tag>Relaxació</Tag>
          <Tag>Treball intens</Tag>
        </>
      )}
    </div>
  );
};
