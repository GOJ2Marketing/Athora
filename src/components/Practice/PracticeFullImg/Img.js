import Image from 'next/image';
import Style from './Img.module.scss';

const PracticeHead = ({ src, disclaimer }) => {
  return (
    <div className={Style.container}>
      <Image src={src} layout="fill" />
      <div className={Style.disclaimer}>{disclaimer}</div>
    </div>
  );
};

export default PracticeHead;
