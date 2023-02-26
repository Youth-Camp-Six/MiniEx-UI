import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

import cls from './home.module.less';

import {
  user,
  sexOtionsUS,
  hobbyOptionsUS,
  homeOptionsUS,
  breadcrumbOptionsUS,
  listUS,
  dropdownOptionsUS,
} from './home.config';
import {
  Flex,
  Title,
  Badge,
  Avatar,
  Tag,
  Button,
  Breadcrumb,
  Tabs,
  Dropdown,
  Input,
  Form,
  FormItem,
  RadioGroup,
  CheckboxGroup,
  InputTag,
  Switch,
  Alert,
  Select,
} from '../../../src/components';

const Home: React.FC = () => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
      });
    }, 300);
  }, []);
  const navigate = useNavigate();
  return (
    <div className={cls.homewrapper}>
      <div className={cls.startbox}>
        <div className={cls.slogan}>Build yours</div>
        <p style={{ margin: '10px' }}>A library of React components</p>
        <Button
          btnType='primary'
          onClick={() => {
            navigate('/en/doc/button');
          }}
        >
          Get started
        </Button>
      </div>
      <div className={cls.home}>
        <Flex direction={'x'} gap={40}>
          <Flex className={cls.item} gap={40} x={'end'} direction={'y'}>
            <Flex gap={0} x={'end'} direction={'y'}>
              <Title size={'m'} style={{ fontWeight: '200', margin: '0' }}>
                MiniEX UI
              </Title>
              <Title size={'xl'} style={{ fontWeight: '400', margin: '0' }}>
                MiniEX UI
              </Title>
              <Title size={'xxl'} style={{ fontWeight: '400', margin: '0' }}>
                MiniEX UI
              </Title>
              <Title size={'xxxl'} style={{ fontWeight: '800', margin: '0' }}>
                MiniEX <span className={cls.design}>UI</span>
              </Title>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Badge round={'round'} value={'99+'}>
                <Avatar src={user.src}></Avatar>
              </Badge>
              <Badge type={'info'} round={'round'} value={'99+'}>
                <Avatar src={user.src} />
              </Badge>
              <Badge round={'round'} value={'99+'}>
                <Avatar src={user.src} status='online' statusPosition='bottom-left' />
              </Badge>
              <Badge round={'round'} value={'99+'}>
                <Avatar src={user.src} status={'processing'} statusPosition={'bottom-right'} />
              </Badge>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Tag type={'primary'}>primary</Tag>
              <Tag type={'success'}>success</Tag>
              <Tag type={'error'}>error</Tag>
              <Tag type={'warning'}>warning</Tag>
              <Tag type={'normal'}>normal</Tag>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Button>Cancel</Button>
              <Button disabled>Confirm</Button>
              <Button btnType='primary'>Confirm</Button>
              <Button btnType='danger'>Confirm</Button>
              <Button btnType='link'>www.miniex.com</Button>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Breadcrumb options={breadcrumbOptionsUS}></Breadcrumb>
            </Flex>
            <Flex x={'end'} width={'380px'}>
              <Tabs options={homeOptionsUS}></Tabs>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Dropdown
                trigger={'hover'}
                arrow={true}
                placement={'top'}
                options={dropdownOptionsUS}
              >
                {
                  <Button className='mi-tag-normal' style={{ border: 0 }}>
                    trigger hover
                  </Button>
                }
              </Dropdown>
              <Dropdown
                trigger={'click'}
                arrow={true}
                placement={'top'}
                options={dropdownOptionsUS}
              >
                {
                  <Button className='mi-tag-normal' style={{ border: 0 }}>
                    trigger click
                  </Button>
                }
              </Dropdown>
            </Flex>
          </Flex>
          <Flex className={cls.item}>
            <Form direction={'column'} width={'100%'}>
              <FormItem label={'Input'} labelwidth='auto' direction='y'>
                <Input placeholder='Please enter'></Input>
              </FormItem>
              <FormItem label={'Textarea'} labelwidth='auto' direction='y'>
                <Input placeholder='Please enter' type='textarea'></Input>
              </FormItem>
              <FormItem label={'Select'} labelwidth='auto' direction='y'>
                <Select placeholder='Please select' options={homeOptionsUS}></Select>
              </FormItem>
              <FormItem label={'Radio'} labelwidth='auto' direction='y'>
                <RadioGroup options={sexOtionsUS}></RadioGroup>
              </FormItem>
              <FormItem label={'Checkbox'} labelwidth='auto' direction='y'>
                <CheckboxGroup options={hobbyOptionsUS}></CheckboxGroup>
              </FormItem>
              <FormItem label={'InputTag'} labelwidth='auto' direction='y'>
                <InputTag modelvalue={user.tagsUS}></InputTag>
              </FormItem>
              <FormItem label={'Switch'} labelwidth='auto' direction='y'>
                <Switch></Switch>
              </FormItem>
            </Form>
          </Flex>
          <Flex className={cls.item} direction={'y'} x={'end'} gap={20}>
            <Alert list={listUS}></Alert>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType='default'>Message</Button>
              <Button btnType='primary' style={{ background: '#31c48d', borderColor: '#31c48d' }}>
                Save
              </Button>
            </Flex>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType='danger' style={{ background: '#e3b344', borderColor: '#e3b344' }}>
                Notification
              </Button>
              <Button btnType='danger'>Notification</Button>
            </Flex>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType='danger' style={{ background: '#e3b344', borderColor: '#e3b344' }}>
                Dialog
              </Button>
              <Button btnType='danger'>Cancel</Button>
            </Flex>
            <Flex x={'start'} gap={20}>
              <Button btnType='primary'>Popover</Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default memo(Home);
