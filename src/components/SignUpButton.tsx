import "../styles/App.css";

interface Props {
  text: string;
  link: string;
  targetBlank: boolean;
}

const SignUpButton = ({ text, link, targetBlank }: Props) => {
  return (
    <div className="sign-up-button-container">
      <a
        href={link}
        target={targetBlank ? "_blank" : "_self"}
        className="sign-up-button"
      >
        {text}
      </a>
    </div>
  );
};

export default SignUpButton;
