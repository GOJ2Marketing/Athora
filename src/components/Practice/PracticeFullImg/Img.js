import Image from 'next/image';
import Style from './Img.module.scss';

const PracticeHead = ({ src }) => {
  return (
    <div className={Style.container}>
      <Image src={src} layout="fill" />
    </div>
  );
};

export default PracticeHead;
