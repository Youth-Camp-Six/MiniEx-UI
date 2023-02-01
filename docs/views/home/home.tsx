import React, { memo, useEffect } from 'react';
import type { ReactNode } from 'react';
import confetti from 'canvas-confetti';
import cls from './home.module.less';
import { Flex } from '../../../src/components/flex/index'
import { Title } from '../../../src/components/title/index';
import { Badge } from '../../../src/components/badge/index'
import { Avatar } from '../../../src/components/avatar/index'
import { Tag } from '../../../src/components/tag/index'
import { Button } from '../../../src/components/button/index'
import { Breadcrumb } from '../../../src/components/breadcrumb/index'
import { Tabs } from '../../../src/components/tabs/index'
import { Popover } from '../../../src/components/popover/index'
import { Input } from '../../../src/components/input/index'
import { Form, FormItem } from '../../../src/components/form/index'
import { RadioGroup } from '../../../src/components/radio/index'
import { CheckboxGroup } from '../../../src/components/checkbox/index'
import { InputTag } from '../../../src/components/input-tag/index'
import { Switch } from '../../../src/components/switch/index'
import { Alert } from '../../../src/components/alert/index'

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
  }, [])
  return (
    <div className={cls.HomeWrapper}>
      <div className={cls.startbox}>
        <div className={cls.slogan}>
          少就是
          <div className={cls.dm}>
            <div className={cls.text}><span>多</span> <span>美</span></div>
          </div>
        </div>
        <p style={{ margin: '10px' }}>一个 React 组件库</p>
        <Button btnType='primary'>开始使用</Button>
      </div>
      <div className={cls.home}>
        <Flex direction={'x'} gap={40} >
          <Flex className={cls.item} gap={40} x={'end'} direction={'y'}>
            <Flex gap={0} x={'end'} direction={'y'}>
              <Title size={'m'} style={{ fontWeight: '200' }}>MiniEX Design</Title>
              <Title size={'xl'} style={{ fontWeight: '400' }}>MiniEX Design</Title>
              <Title size={'xxl'} style={{ fontWeight: '600' }}>MiniEX Design</Title>
              <Title size={'xxxl'} style={{ fontWeight: '800' }}>MiniEX Design</Title>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Badge round={'round'} value={'99+'}>
                <Avatar src={"https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"}></Avatar>
              </Badge>
              <Badge type={'info'} round={'round'} value={'99+'}>
                <Avatar src={"https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668"} />
              </Badge>
              <Badge round={'round'} value={'99+'}>
                <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" status="online" statusPosition="bottom-left" />
              </Badge>
              <Badge round={'round'} value={'99+'}>
                <Avatar src="https://q1.qlogo.cn/g?b=qq&s=100&nk=1057072668" status={"processing"} statusPosition={"bottom-right"} />
              </Badge>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Tag type={"primary"}>primary</Tag>
              <Tag type={"success"}>success</Tag>
              <Tag type={"error"}>error</Tag>
              <Tag type={"warning"}>warning</Tag>
              <Tag type={"normal"}>normal</Tag>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Button >取消</Button>
              <Button disabled>确定</Button>
              <Button btnType='primary'>确定</Button>
              <Button btnType='danger'>确定</Button>
              <Button btnType='link'>www.miniex.com</Button>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Breadcrumb options={[{ label: '首页', to: '' }, { label: '商品列表', to: '1' }, { label: '商品详情', to: '2', active: true, }]} ></Breadcrumb>
            </Flex>
            <Flex x={'end'} width={'380px'}>
              <Tabs options={[{ label: '北京', value: '1' },
              { label: '上海', value: '2' },
              { label: '广州', value: '3' },
              { label: '深圳', value: '4' },
              { label: '乌鲁木齐', value: '5' },]}></Tabs>
            </Flex>
            <Flex x={'end'} gap={20}>
              <Button >取消</Button>
              <Button disabled>确定</Button>
              <Button btnType='primary'>确定</Button>
              <Popover trigger={'789'} arrow={true} placement={111}>456456</Popover>
            </Flex>
          </Flex>
          <Flex className={cls.item}>
            <Form direction={"column"} width={'100%'}>
              <FormItem label={'Input'}>
                <Input></Input>
              </FormItem>
              <FormItem label={'Textarea'}>
                <Input type="textarea" ></Input>
              </FormItem>
              <FormItem label={'Select'}>
                <Input placeholder='请选择'></Input>
              </FormItem>
              <FormItem label={'Radio'}>
                <RadioGroup modelValue={'0'} options={[
                  { label: '未知', value: '0' },
                  { label: '男', value: '1' },
                  { label: '女', value: '2' },
                ]}></RadioGroup>
              </FormItem>
              <FormItem label={'Checkbox'}>
                <CheckboxGroup modelValue={[1, 2]} options={[
                  { label: '唱歌', value: 1 },
                  { label: '跳', value: 2 },
                  { label: 'rap', value: 3 },
                  { label: '打篮球', value: 44 },
                ]}></CheckboxGroup>
              </FormItem>
              <FormItem label={'InputTag'}>
                <InputTag modelValue={['美丽', '大方']}></InputTag>
              </FormItem>
              <FormItem label={'Switch'}>
                <Switch modelValue={true}></Switch>
              </FormItem>
            </Form>
          </Flex>
          <Flex className={cls.item} direction={'y'} x={'end'} gap={20}>
            <Alert list={[
              {
                type: 'info',
                title: '成功发送一条消息',
                content: '',
              },
              {
                type: 'normal',
                title: '成功发送一条消息',
                content: '',
              },
              {
                type: 'warning',
                title: '成功发送一条消息',
                content: '',
              },

              {
                type: 'error',
                title: '成功发送一条消息',
                content: '',
              },
              {
                type: 'success',
                title: '成功发送一条消息',
                content: '',
              },
            ]}></Alert>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType="default" >Message</Button>
              <Button btnType="primary" style={{ background: '#31c48d', borderColor: '#31c48d' }}>Save</Button>
            </Flex>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType="danger" style={{ background: '#e3b344', borderColor: '#e3b344' }}>Notification</Button>
              <Button btnType="danger" >Notification</Button>
            </Flex>
            <Flex x={'start'} gap={20} wrap>
              <Button btnType="danger" style={{ background: '#e3b344', borderColor: '#e3b344' }}>Dialog</Button>
              <Button btnType="danger" >Cancel</Button>
            </Flex>
            <Flex x={'start'} gap={20}>
              < Button btnType='primary'>Popover</Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default memo(Home);
