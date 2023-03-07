import { useRouter } from 'next/router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Container from 'components/Container';

import Style from '../../styles/pages/AccountForm.module.scss';
import Link from 'next/link';

const WordPressLogin = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

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
        // Reset the form validation, just to be safe
        setError(true);
        // Redirect the user to the account page
        router.push('/account');
      } else {
        console.error(`Authentication failed: ${response.statusText}`);
        // Show error message to user
        setError(true);
      }
    } catch (error) {
      console.error(`Authentication failed: ${error.message}`);
    }
  };

  return (
    <div className={Style.background}>
      <Container className={Style.formContainer}>
        <h1>My Account</h1>
        <h3 className={error === true ? Style.show : Style.hide}>
          There was an error with your username or password. Please try again.
        </h3>
        <form
          className={Style.form}
          action="athorastg.wpengine.com/wp-json/aam/v1/authenticate"
          method="post"
          onSubmit={formSubmissionHandler}
        >
          <div className={Style.formItem}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>

          <div className={Style.formItem}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit">Submit</button>
          <Link href="create-account">Create an Account</Link>
        </form>
      </Container>
    </div>
  );
};

export default WordPressLogin;
