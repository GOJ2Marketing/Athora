import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const WordPressLogin = () => {
  const router = useRouter();

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const response = await fetch('https://athorastg.wpengine.com/wp-json/aam/v1/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const {
          jwt: { token },
        } = await response.json();
        // Store the access token in a secure location (such as a cookie or local storage)
        Cookies.set('access_token', token, { expires: 1 / 24 });
        console.log(`Authentication successful: ${token}`);
        // Redirect the user to the account page
        router.push('/account');
      } else {
        console.error(`Authentication failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Authentication failed: ${error.message}`);
    }
  };

  return (
    <form action="athorastg.wpengine.com/wp-json/aam/v1/authenticate" method="post" onSubmit={formSubmissionHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default WordPressLogin;
