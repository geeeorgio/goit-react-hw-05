import { Link } from "react-router-dom";
import BackLink from "../../components/BackLink/BackLink";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Section>
      <Container className={s.container}>
        <div className={s.notfound}>
          <div className={s.notfound404}>
            <h1 className={s.title}>404</h1>
          </div>
          <h2 className={s.subtitle}>Page not found</h2>
          <p className={s.text}>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link to="/" className={s.link}>
            Go to Homepage
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
