import Container from 'components/Container';
import Image from 'next/image';
import Style from './PracticeHead.module.scss';

const PracticeHead = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <Container>
          <svg xmlns="http://www.w3.org/2000/svg" width="1640" height="7" viewBox="0 0 1640 7">
            <line
              id="Line_55"
              data-name="Line 55"
              x2="1640"
              transform="translate(0 3.5)"
              fill="none"
              stroke="#e2ddd0"
              stroke-width="7"
            />
          </svg>
          <h1>{props.title}</h1>
        </Container>
      </div>
      <div className={Style.bodyContainer}>
        <Container className={Style.bodyContent}>
          <p>{props.desc}</p>
          <div className={Style.imgContainer}>
            <Image src={props.img} layout="fill" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PracticeHead;
