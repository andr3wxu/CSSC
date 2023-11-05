import { ReactNode } from "react";

interface Props {
  id: string;
  content: ReactNode;
}

const Home = ({ id, content }: Props) => {
  return <section id={id}>{content}</section>;
};

export default Home;
