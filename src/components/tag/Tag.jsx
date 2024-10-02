import "./tag.css";

export const Tag = ({ onClick, children, selected }) => {
  return (
    <span className={`tag${selected ? " selected" : ""}`} onClick={onClick}>
      {children}
    </span>
  );
};
