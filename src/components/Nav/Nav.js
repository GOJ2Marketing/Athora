/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import useSite from 'hooks/use-site';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import { postPathBySlug } from 'lib/posts';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';

import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';
import Container from 'components/Container';

const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';

const Nav = () => {
  const formRef = useRef();

  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);

  const { metadata = {}, menus } = useSite();
  const { title } = metadata;
  console.log(title);

  const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  const navigation = findMenuByLocation(menus, navigationLocation);

  const { query, results, search, clearSearch, state } = useSearch({
    maxResults: 5,
  });

  const searchIsLoaded = state === SEARCH_STATE_LOADED;

  // When the search visibility changes, we want to add an event listener that allows us to
  // detect when someone clicks outside of the search box, allowing us to close the results
  // when focus is drawn away from search

  useEffect(() => {
    // If we don't have a query, don't need to bother adding an event listener
    // but run the cleanup in case the previous state instance exists

    if (searchVisibility === SEARCH_HIDDEN) {
      removeDocumentOnClick();
      return;
    }

    addDocumentOnClick();
    addResultsRoving();

    // When the search box opens up, additionall find the search input and focus
    // on the element so someone can start typing right away

    const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

    searchInput.focus();

    return () => {
      removeResultsRoving();
      removeDocumentOnClick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVisibility]);

  /**
   * addDocumentOnClick
   */

  function addDocumentOnClick() {
    document.body.addEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * removeDocumentOnClick
   */

  function removeDocumentOnClick() {
    document.body.removeEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * handleOnDocumentClick
   */

  function handleOnDocumentClick(e) {
    if (!e.composedPath().includes(formRef.current)) {
      setSearchVisibility(SEARCH_HIDDEN);
      clearSearch();
    }
  }

  /**
   * handleOnSearch
   */

  function handleOnSearch({ currentTarget }) {
    search({
      query: currentTarget.value,
    });
  }

  /**
   * handleOnToggleSearch
   */

  function handleOnToggleSearch() {
    setSearchVisibility(SEARCH_VISIBLE);
  }

  /**
   * addResultsRoving
   */

  function addResultsRoving() {
    document.body.addEventListener('keydown', handleResultsRoving);
  }

  /**
   * removeResultsRoving
   */

  function removeResultsRoving() {
    document.body.removeEventListener('keydown', handleResultsRoving);
  }

  /**
   * handleResultsRoving
   */

  function handleResultsRoving(e) {
    const focusElement = document.activeElement;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
        focusElement.nextSibling.children[0].firstChild.firstChild.focus();
      } else if (focusElement.parentElement.nextSibling) {
        focusElement.parentElement.nextSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.firstChild.firstChild.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
        focusElement.parentElement.previousSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.lastChild.firstChild.focus();
      }
    }
  }

  /**
   * escFunction
   */

  // pressing esc while search is focused will close it

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      clearSearch();
      setSearchVisibility(SEARCH_HIDDEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <Container className={styles.navContainer}>
        <p className={styles.navName}>
          <Link href="/">
            <a className={styles.logo}> 
              <svg id="Athora_PrimaryLogo_FullColor_SoftLavender__Dark" data-name="Athora_PrimaryLogo_FullColor(SoftLavender)_Dark" xmlns="http://www.w3.org/2000/svg" width="772.781" viewBox="0 0 772.781 219.468">
                <path id="Athora_PrimaryLogo_FullColor_SoftLavender__Dark-2" data-name="Athora_PrimaryLogo_FullColor(SoftLavender)_Dark" d="M492.858,405.231l36.65,83.84h-1.071l-36.645-83.84Zm74.515,83.922h.983V412.362h-.983Zm-80.936-85,37.155,85h-11.05l-10.324-23.8H461.3l-10.2,23.8h-6.678l37.278-85h4.737Zm13.356,55.855L481.7,418.237,463.607,460.01Zm23.422-50.516h28.777v79.654h10.566V409.494h28.659V404.15h-68v5.345ZM939.3,404.15l37.155,85H965.4l-10.324-23.8H914.159l-10.2,23.8h-6.678l37.278-85Zm13.356,55.856-18.093-41.773-18.093,41.773ZM683.961,489.148h.983v-85h-.983Zm-15.375-45.779H618.07V404.15H607.5v85H618.07V448.714h50.516v40.435h10.566v-85H668.586Zm126.664,3.27c0,25.2-19.211,44.2-44.682,44.2-.582,0-1.148-.015-1.715-.031a48.276,48.276,0,0,1-6.982-.747c-22.583-2.425-39.024-20.292-39.024-43.421s16.446-41,39.024-43.421a47.509,47.509,0,0,1,6.977-.747c.566-.015,1.133-.031,1.715-.031,25.472,0,44.682,19,44.682,44.2Zm-14.942,0c0-22.465-12.306-37.4-31.3-38.313a1,1,0,0,0-.3,0c-.515-.031-1.025-.046-1.555-.046-20.029,0-33.267,15.174-33.267,38.359s13.238,38.38,33.267,38.38c.53,0,1.04-.015,1.555-.046a1,1,0,0,0,.3,0c18.989-.911,31.3-15.848,31.3-38.329Zm13.964,0c0-22.851-16.162-40.481-38.375-42.921,20.771,3.795,35.471,21,35.471,42.921s-14.7,39.127-35.461,42.921C778.119,487.109,794.271,469.484,794.271,446.638Zm92.876,41.433,1.334.9H886.54v-.129c-2.554-1.735-4.948-4.531-7.306-8.542l-11.492-19.226c-1.725-3.115-2.971-5.365-6.74-6.956l-1.411-.6,1.493-.335c12.383-2.765,19.777-11.513,19.777-23.4,0-9.556-6.5-17.63-16.579-21.486,8.125,4.351,13.3,11.781,13.3,20.621,0,11.9-8.866,21.25-21.734,24.164a17.947,17.947,0,0,1,8.985,8.135l11.05,18.7c2.183,3.764,5.221,7.409,7.893,9.227H871.51a22.556,22.556,0,0,1-6.194-7.044l-12.63-21.857a18.194,18.194,0,0,0-5.345-6.071H823.9v34.971H813.338v-85h33.391a40.456,40.456,0,0,1,9.618,1.138c15.066,2.106,25.487,12.095,25.487,24.5,0,11.755-7.317,20.853-19.2,24.025,3.131,1.684,4.4,3.97,5.957,6.786l.438.783L880.073,479.8c2.307,3.918,4.619,6.622,7.075,8.274Zm-20.621-58.909c0-12.023-8.619-19.669-21.857-19.669H823.9v39.343h20.766c13.238,0,21.857-7.77,21.857-19.669Zm79.185-23.937h-1.066l36.645,83.84h1.071ZM300.047,344.87l-4.536,14.165-.9,24.936,10.354-33.921ZM283.318,502.092l-.417,11.786,8.7-10.267L270.389,473.5l12.929,28.6ZM321.5,348.582l-5.082,17.064,9.973-13.022ZM291.566,346.7,261.9,363.046l2.569,74.907,9.356-65.484,17.743-25.776Zm40.661,81.43,3.053,13.866,1.545-16-15.8-9.773ZM338.035,408l-3.177-9.052-12.738.824L338.035,408Zm-97.824-18.768L226,408.938l16.065-9.773ZM224.45,454.151l6.148-7.785,3.007-32.093-10.457,23.114,1.3,16.765Zm15.071,19.18,9.773-12.811-4.778-42.34Zm49.373-81.58-11.317,54.7,11.317,18.861L287.761,447.2l7.167-41.871-6.035-13.583ZM383.449,464.6l18.1-.335-9.1-17.923-9,18.258Zm19.566-16,3.918-1.344-6.6-11.508-.463-.8s-14.649,1.946-17.146,2.291l8.444-16.533L357.117,391.18l2.713-26.131L343.663,361.4l-7.131-17.11-15.2-11.425-9.52,4.361L300.047,326.89l-68.192,34.735-.9,19.149-21.378,29.6,7.816,7.6-7.6,18.186,4.912,52.725,11.055-14.891,9.87,23.031,14.556-15.066,12.45,19.623,17.2,37.047,15.2-16.616,9.572,3.156,11.456,13.583,9.634,7.61,16.791-4.217,17.259-35.286L357.333,484l-1.859-3.939,12.7,1.313,6.359-9.943,2.806-.052,5.185,4.825,20.415-.376,8.352-8.933-8.264-18.273Zm-30.332,13.356-7.9,12.363-20.349-2.106,6.41,13.578,2.1,19.834-15.061,30.8-12.424,3.12-16.971-20.122-15.436-5.087-11.379,12.43-13.186-28.4-17.2-27.114L237.8,485.2l-10.483-24.463-7.6,10.241-3.146-33.777,8.949-21.059L218.4,409.5l19.1-26.45.808-17.27,60.737-30.94,11.616,10.21,9.84-4.505,10.591,7.965,7.759,18.608,13.758,3.1-2.461,23.7,32.742,28.386-7.662,15-2.585,9.1v3.336l.036,12.2Zm27.475,7.255-15.086.278-5.185-4.825,1.591-.031,9.381-19.02a133.147,133.147,0,0,1-16.085,4.083l-.051-2.878.618-1.8c4.495-.741,20.982-2.909,20.982-2.909l.844,1.473s-1.39.479-3.558,1.169l9.886,19.478,1.761-.031-5.1,5.015Zm-65.726,62.055,12.852-25.647L328.211,532.94l6.215-1.668Zm-9.937-45.522-14.046-27.67,18.84-3.022c4.3-.314,8.624-.762,12.769-1.287l-.484-2.708-2.7-.9c-5.762,1.225-9.438,2.178-9.438,2.178l-26.424,4.238.422,2.626,4.274-.685L294,486.311l-2.677.051,7.378,6.864,21.461-.4,7.25-7.131-2.914.051Zm-28.53.525,13.222-26.81,13.361,26.321Zm11.657,17.007,13.15,21.934-2.24-22.166-10.916.232Zm28.371-9.253-8.681,32.315,12.4-21.78-3.723-10.535Z" transform="translate(-209.58 -326.89)" fill="#e2ddd0"/>
              </svg>
            </a>
          </Link>
        </p>
        <ul className={styles.navMenu}>
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
        <div className={styles.navSearch}>
          {searchVisibility === SEARCH_HIDDEN && (
            <button onClick={handleOnToggleSearch} disabled={!searchIsLoaded}>
              <span className="sr-only">Toggle Search</span>
              <FaSearch />
            </button>
          )}
          {searchVisibility === SEARCH_VISIBLE && (
            <form ref={formRef} action="/search" data-search-is-active={!!query}>
              <input
                type="search"
                name="q"
                value={query || ''}
                onChange={handleOnSearch}
                autoComplete="off"
                placeholder="Search..."
                required
              />
              <div className={styles.navSearchResults}>
                {results.length > 0 && (
                  <ul>
                    {results.map(({ slug, title }, index) => {
                      return (
                        <li key={slug}>
                          <Link tabIndex={index} href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {results.length === 0 && (
                  <p>
                    Sorry, not finding anything for <strong>{query}</strong>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
        </Container>
      </Section>
    </nav>
  );
};

export default Nav;
