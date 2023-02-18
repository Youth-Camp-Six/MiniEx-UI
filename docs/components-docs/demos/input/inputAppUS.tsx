import { InputSearch, MiIcon, Flex, Title } from '../../../../src/components';
import React from 'react';
function App() {
  const suffix = <MiIcon.Search size='16' />;

  // eslint-disable-next-line no-console
  const onSearch = (value: string) => console.log(value);
  return (
    <div>
      <Flex direction={'x'} gap={40}>
        <Flex gap={40} x={'start'} direction={'y'}>
          <Flex gap={0} x={'start'} direction={'y'}>
            <Title size={'m'} style={{ fontWeight: '700', margin: '0' }}>
              Search box
            </Title>
            Example of creating a search box by grouping a standard input with a search button.
          </Flex>
          <Flex gap={10} x={'start'} direction={'y'}>
            <InputSearch
              placeholder='input search text'
              suffix={suffix}
              onSearch={onSearch}
              size={'medium'}
            ></InputSearch>
            <InputSearch
              placeholder='input search text'
              enterButton='Search'
              onSearch={onSearch}
              size={'medium'}
            ></InputSearch>
          </Flex>
        </Flex>
        <Flex gap={40} x={'start'} direction={'y'}>
          <Flex gap={0} x={'start'} direction={'y'}>
            <Title size={'m'} style={{ fontWeight: '700', margin: '0' }}>
              Three sizes of Input
            </Title>
            There are three sizes of an Input box: large (40px), medium (32px) and small (24px).
          </Flex>
          <Flex gap={10} x={'start'} direction={'y'}>
            <InputSearch
              placeholder='small size'
              suffix={suffix}
              onSearch={onSearch}
              size={'small'}
            ></InputSearch>
            <InputSearch
              placeholder='medium size'
              suffix={suffix}
              onSearch={onSearch}
              size={'medium'}
            ></InputSearch>
            <InputSearch
              placeholder='large size'
              suffix={suffix}
              onSearch={onSearch}
              size={'large'}
            ></InputSearch>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
export default App;
