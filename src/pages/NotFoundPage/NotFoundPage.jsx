import BackLink from "../../components/BackLink/BackLink";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Section>
      <Container className={s.container}>
        <BackLink />
        <h1 className={s.title}>404</h1>
        <p className={s.text}>Page not found</p>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
