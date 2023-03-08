import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import Style from './WordPressLogout.module.scss';

const WordPressLogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('access_token'); // remove access token from cookie or local storage
    router.push('/'); // redirect to home page or any other desired page
  };

  return (
    <button onClick={handleLogout} className={Style.button}>
      Log Out
    </button>
  );
};

export default WordPressLogout;
