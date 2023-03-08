import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import Layout from 'components/Layout';
import WordPressLogout from 'components/WordPressLogout';
import Link from 'next/link';
import * as Switch from '@radix-ui/react-switch';

import Style from './Account.module.scss';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [userFiles, setUserFiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the access token from the cookie
    const accessToken = Cookies.get('access_token');

    // Make an API request to fetch the user data from the WordPress API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          'https://athorastg.wpengine.com/wp-json/wp/v2/users/me?context=edit&_fields=name,email',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error(`Error fetching user data: ${response.statusText}`);
          router.push('/login'); // Redirect to the login page if there's an error
        }
      } catch (error) {
        console.error(`Error fetching user data: ${error.message}`);
        router.push('/login'); // Redirect to the login page if there's an error
      }
    };

    // Make an API request to fetch the user's media library files from the WordPress API
    const fetchUserFiles = async () => {
      try {
        const response = await fetch(`https://athorastg.wpengine.com/wp-json/wp/v2/media?author=${userData.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserFiles(data);
        } else {
          console.error(`Error fetching user files: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching user files: ${error.message}`);
      }
    };

    // Call the fetchUserData and fetchUserFiles functions to fetch the data
    if (userData) {
      fetchUserFiles();
    } else {
      fetchUserData();
    }
  }, [userData, router]);

  return (
    <Layout>
      {userData ? (
        <div>
          <div className={Style.headerContainer}>
            <Container className={Style.headerContent}>
              <h1>Hello, {userData.name}</h1>
              <div className={Style.info}>
                <p>Email: {userData.email}</p>
                <WordPressLogout />
              </div>
            </Container>
          </div>
          <div className={Style.switchContainer}>
            <Container className={Style.switchContent}>
              <Switch.Root className={Style.switchRoot} onCheckedChange={setChecked}>
                <div className={Style.tabContainer}>
                  <div className={Style.tabTrigger} value="tab1">
                    <h3 className={Style.documents}>Documents</h3>
                  </div>
                  <div className={Style.tabTrigger} value="tab2">
                    <h3 className={Style.billing}>Billing</h3>
                  </div>
                </div>
                <Switch.Thumb className={Style.switchThumb} />
              </Switch.Root>
            </Container>
          </div>
          <div className={checked === false ? Style.show : Style.hide} value="tab1">
            <Container>
              <h2>Files</h2>
              {userFiles.length > 0 ? (
                <ul>
                  {userFiles.map((file) => (
                    <li key={file.id}>
                      <a href={file.source_url}>{file.title.rendered}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No files found.</p>
              )}
            </Container>
          </div>
          <div className={checked === true ? Style.show : Style.hide} value="tab2">
            <Container>
              <div className={Style.billingLinks}>
                <Link href="#"> Make a payment</Link>
                <Link href="/contact-us">Contact us</Link>
              </div>
            </Container>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </Layout>
  );
};

export default Account;
