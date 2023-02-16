import ButtonAlt from 'components/ButtonAlt';
import Container from 'components/Container';
import Style from './CTA.module.scss';

const PracticeHead = ({ title, button, background }) => {
  return (
    <div className={Style.container} style={{ backgroundColor: background }}>
      <Container className={Style.contentContainer}>
        <h2>{title}</h2>
        <ButtonAlt>{button}</ButtonAlt>
      </Container>
    </div>
  );
};

export default PracticeHead;
