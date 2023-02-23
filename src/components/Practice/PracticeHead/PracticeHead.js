import Container from 'components/Container';
import Image from 'next/image';
import Style from './PracticeHead.module.scss';

const PracticeHead = (props) => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <Container>
          <h1>{props.title}</h1>
        </Container>
      </div>
      <div className={Style.bodyContainer}>
        <Container className={Style.bodyContent}>
          <p dangerouslySetInnerHTML={{ __html: props.desc.replace(/\n/g, '<br>') }}></p>
          <div className={Style.imgContainer}>
            <Image src={props.img} layout="fill" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PracticeHead;
