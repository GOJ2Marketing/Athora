import Container from 'components/Container';
import Style from './Info.module.scss';

export default function Info({ list }) {
  return (
    <div className={Style.container}>
      <Container className={Style.contentContainer}>
        {list.map(({ title, sublist }) => {
          return (
            <div key={title} className={Style.list}>
              <h2>{title}</h2>
              {sublist.map(({ subtitle, columns, entries }) => {
                return (
                  <>
                    <h3 key={subtitle} className={Style.subListTitle}>
                      {subtitle ? subtitle.concat(':') : ''}
                    </h3>
                    <ol className={columns ? Style.columns : Style.subList}>
                      {entries.map(({ entry }) => {
                        return <li key={entry}>{entry}</li>;
                      })}
                    </ol>
                  </>
                );
              })}
            </div>
          );
        })}
      </Container>
    </div>
  );
}
