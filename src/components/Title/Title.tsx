import { TitleProp } from "../../types/title-type";

const Title: React.FC<TitleProp> = ({ text }) => {
  return <h1 className="text-4xl uppercase text-center my-10">{text}</h1>;
};

export default Title;
