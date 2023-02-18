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
              搜索框
            </Title>
            带有搜索按钮的输入框。
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
              enterButton='搜索'
              onSearch={onSearch}
              size={'medium'}
            ></InputSearch>
          </Flex>
        </Flex>
        <Flex gap={40} x={'start'} direction={'y'}>
          <Flex gap={0} x={'start'} direction={'y'}>
            <Title size={'m'} style={{ fontWeight: '700', margin: '0' }}>
              三种大小
            </Title>
            我们为input输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
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
