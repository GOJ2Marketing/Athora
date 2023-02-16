import Image from 'next/image';
import Link from 'next/link';
import Container from 'components/Container';
import Style from './header.module.scss';

const Header = ({ list }) => {
  return (
    <div className={Style.container}>
      <Container className={Style.contentContainer}>
        <div className={Style.content}>
          <div className={Style.left}>
            <h1>{list.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: list.desc.replace(/\n/g, '<br>') }}></div>
          </div>
          <div className={Style.right}>
            <div className={Style.photoContainer}>
              <Image src={list.image} layout="fill" />
            </div>
            <div className={Style.social}>
              <Link href={list.social}>
                <Image src="/linkedIn.svg" width={36} height={36} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
