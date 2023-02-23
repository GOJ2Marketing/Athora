import * as Tabs from '@radix-ui/react-tabs';
import Container from 'components/Container';

import Style from './PracticeTabs.module.scss';

const PracticeTabs = (props) => {
  console.log(props);
  return (
    <div className={Style.container}>
      <Container>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2" viewBox="0 0 1600 2">
            <line
              id="Line_203"
              data-name="Line 203"
              x2="1600"
              transform="translate(0 1)"
              fill="none"
              stroke="#352540"
              stroke-width="2"
            />
          </svg>
          <h2>{props.title}</h2>
        </div>
        <Tabs.Root className={Style.tabContainer} defaultValue="tab1">
          <Tabs.List className={Style.tabList}>
            {props.list.map((e) => {
              return (
                <Tabs.Trigger key={e.tab} value={e.tab} className={Style.tabTrigger}>
                  <p>{e.title}</p>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          <div className={Style.contentContainer}>
            {props.list.map((e) => {
              return (
                <Tabs.Content key={e.tab} value={e.tab} className={Style.tabContent}>
                  <p dangerouslySetInnerHTML={{ __html: e.desc.replace(/\n/g, '<br>') }}></p>
                </Tabs.Content>
              );
            })}
          </div>
        </Tabs.Root>
      </Container>
    </div>
  );
};

export default PracticeTabs;
