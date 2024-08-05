import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <Section>
        <h1>About Page</h1>
        <button onClick={() => goToContact()}>go to contact page</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go Back
        </button>
      </Section>
    </>
  );
};

export default About;
