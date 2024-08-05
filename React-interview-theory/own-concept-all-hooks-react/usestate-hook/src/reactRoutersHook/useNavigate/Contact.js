import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Section>
        <h1>Contact page</h1>
        <button onClick={gotoHome}>go to home page</button>
      </Section>
    </>
  );
};

export default Contact;
