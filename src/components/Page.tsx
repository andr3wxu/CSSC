import { ReactNode } from "react";
import { useState, useEffect } from "react";
import "../styles/Page.css";

interface Props {
  index: number;
  id: string;
  content: ReactNode;
  inSection: boolean[];
}

const Page = ({ index, id, content, inSection }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (inSection[index]) {
      setIsVisible(true);
    }
  }, inSection);

  return (
    <>
      <section id={id} className={`page ${isVisible ? "" : "invisible"}`}>
        {content}
      </section>
    </>
  );
};

export default Page;
