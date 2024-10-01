import "./tag.css";

export const Tag = ({ onClick, children }) => {
  return (
    <span className="tag" onClick={onClick}>
      {children}
    </span>
  );
};
