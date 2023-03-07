import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Section from 'components/Section';
import Container from 'components/Container';
import Layout from 'components/Layout';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [userFiles, setUserFiles] = useState([]);
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
      <Section>
        <Container>
          {userData ? (
            <div>
              <h1>{userData.name}</h1>
              <p>Email: {userData.email}</p>
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
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </Container>
      </Section>
    </Layout>
  );
};

export default Account;
