import Container from 'components/Container';
import Button from 'components/Button';
import Style from './CTA.module.scss';

const CTA = ({ text }) => {
  return (
    <div className={Style.container}>
      <Container className={Style.contentContainer}>
        <h2>{text}</h2>
        <Button href="/contact-us">Contact Us</Button>
      </Container>
    </div>
  );
};

export default CTA;
