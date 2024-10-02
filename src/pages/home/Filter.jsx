import "./filter.css";
import { Tag } from "../../components/tag/Tag";

export const Filter = () => {
  return (
    <div className="tag-list">
      <Tag>Social</Tag>
      <Tag>Educació</Tag>
      <Tag>Caritat</Tag>
      <Tag>Cuinar</Tag>
      {/* <Tag>Relaxació</Tag>
      <Tag>Treball intens</Tag> */}
    </div>
  );
};
