import ButtonAlt from 'components/ButtonAlt';
import Container from 'components/Container';
import Style from './CTA.module.scss';

const PracticeHead = () => {
  return (
    <div className={Style.container}>
      <Container className={Style.contentContainer}>
        <h2>Schedule a Consultation</h2>
        <ButtonAlt>Contact Us</ButtonAlt>
      </Container>
    </div>
  );
};

export default PracticeHead;
