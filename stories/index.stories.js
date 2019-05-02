import React from 'react';

import {storiesOf} from '@storybook/react';
import Md from 'react-markdown';

import theme from '../src/themes/default/bulma.theme.scss';/* eslint no-unused-vars : 0*/

/*
 * Components
 */
import {
  Columns,
  Column,
  // Tile,
  Content,
  Delete,
  Notification,
  // Progress,
  // Table,
  Tag,
  Title,
  Subtitle,
  Heading,

  Checkbox,
  Control,
  Help,
  Input,
  Label,
  Radio,
  Select,
  TextArea,

  Button,

  Field,
  FieldBody,
  FieldLabel,

  Breadcrumb,
  BreadcrumbItem,

  // Card,
  CardImage,
  CardContent,

  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,

  Card,

  CardFooter,
  CardFooterItem,


  DropdownContent,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,

  Icon,


  Level,
  LevelItem,
  LevelLeft,
  LevelRight,


  Media,
  MediaContent,
  MediaLeft,
  MediaRight,


  Menu,
  MenuLabel,
  MenuList,
  MenuLink,


  Message,
  MessageHeader,
  MessageBody,


  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,

  Panel,
  PanelHeading,
  PanelTabs,
  PanelTab,
  PanelBlock,
  PanelIcon,

  Tabs,
  Tab,
  TabList,
  TabLink,

  Container,
  Footer,
  Section,
} from '../src/components/index';
/**
 * Documentation
 */
import introduction from '!!raw-loader!./documentation/Introduction.md';
/**
 * Layout
 */
import layoutsIntro from '!!raw-loader!./documentation/Layouts.md';
import {
  Simple,
  DoubleConfig,
  DoubleNav,
  Triple
} from './layouts';
 /**
 * Mockups
 */
import {
  Landing,
  SelectViewTable,
  SelectViewColumns,
  ClusterView,
} from './mockups/takoyaki';

storiesOf('Documentation', module).add('Welcome to médialab design workshop', () => <Md source={introduction} />);

storiesOf('Layouts', module)
.add('Layouts rationale', () => <Md source={layoutsIntro} />)
.add('Simple (workspace only)', () => <Simple />)
.add('Double (workspace + configspace)', () => <DoubleConfig />)
.add('Double (workspace + nav)', () => <DoubleNav />)
.add('Triple (workspace + configspace + nav)', () => <Triple />);

storiesOf('Mockups/Takoyaki', module)
  .add('Landing', () => (<Landing />))
  .add('Select view (table)', () => (<SelectViewTable />))
  .add('Select view (columns)', () => (<SelectViewColumns />))
  .add('Cluster view', () => (<ClusterView />));

storiesOf('Components/Bulma & bloomer inherited components/Columns', module)
    .add('Bulma columns system', () =>
      (<Columns>
        <Column>1</Column>
        <Column>2</Column>
      </Columns>)
    )
    .add('Sizing', () =>
      (<Columns>
        <Column isSize={2}>2/12</Column>
        <Column isSize={10}>10/12</Column>
      </Columns>)
    );
storiesOf('Components/Bulma & bloomer inherited components/Content', module)
    .add('Default', () => <Content>The content component allows to display non-ui contents</Content>)
    .add('Sizing', () =>
      (<div>
        <Content isSize={'small'}>These are small content.</Content>
        <Content isSize={'normal'}>These are normal content.</Content>
        <Content isSize={'large'}>These are large content.</Content>
      </div>)
    );
storiesOf('Components/Bulma & bloomer inherited components/Notification', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Notification>The content component allows to display non-ui contents</Notification>
        <Notification isColor="danger">The content component allows to display non-ui contents</Notification>
        <Notification isColor="warning">The content component allows to display non-ui contents</Notification>
        <Notification isColor="success">The content component allows to display non-ui contents</Notification>
      </div>)
    );
  storiesOf('Components/Bulma & bloomer inherited components/Title', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Title>Default title</Title>
        <Title isSize={1}>Title size 1</Title>
        <Title isSize={2}>Title size 2</Title>
        <Title isSize={3}>Title size 3</Title>
        <Title isSize={4}>Title size 4</Title>
        <Title isSize={5}>Title size 5</Title>
        <Title isSize={6}>Title size 6</Title>
      </div>)
    );
  storiesOf('Components/Bulma & bloomer inherited components/Heading', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Heading>Default heading</Heading>
      </div>)
    );

  storiesOf('Components/Bulma & bloomer inherited components/Subtitle', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Subtitle>Default title</Subtitle>
        <Subtitle isSize={1}>Title size 1</Subtitle>
        <Subtitle isSize={2}>Title size 2</Subtitle>
        <Subtitle isSize={3}>Title size 3</Subtitle>
        <Subtitle isSize={4}>Title size 4</Subtitle>
        <Subtitle isSize={5}>Title size 5</Subtitle>
        <Subtitle isSize={6}>Title size 6</Subtitle>
      </div>)
    );

  storiesOf('Components/Bulma & bloomer inherited components/Heading', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Heading>Default heading</Heading>
      </div>)
    );

  storiesOf('Components/Bulma & bloomer inherited components/Tag', module)
    .add('Default', () =>
      (<div style={{width: '20rem'}}>
        <Tag>tag content</Tag>
      </div>)
    );
storiesOf('Components/Bulma & bloomer inherited components/Modal', module)
    .add('Default', () =>
      (
        <div>
          <Modal isActive>
            <ModalBackground />
            <ModalContent>
              <Card />
            </ModalContent>
            <ModalClose />
          </Modal>
        </div>
      )
    );

storiesOf('Components/Bulma & bloomer inherited components/Message', module)
    .add('Default', () =>
      (
        <Message>
          <MessageHeader>
            <p>Hello World</p>
            <Delete />
          </MessageHeader>
          <MessageBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
              tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
              purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
              lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
              a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </MessageBody>
        </Message>
      )
    );
storiesOf('Components/Bulma & bloomer inherited components/Tabs', module)
    .add('Default', () =>
      (
        <Tabs>
          <TabList>
            <Tab>
              <TabLink>
                <Icon isSize="small"><span className="fa fa-image" aria-hidden="true" /></Icon>
                <span>Pictures</span>
              </TabLink>
            </Tab>
            <Tab isActive>
              <TabLink>
                <Icon isSize="small"><span className="fa fa-music" aria-hidden="true" /></Icon>
                <span>Music</span>
              </TabLink>
            </Tab>
            <Tab>
              <TabLink>
                <Icon isSize="small"><span className="fa fa-film" aria-hidden="true" /></Icon>
                <span>Video</span>
              </TabLink>
            </Tab>
            <Tab>
              <TabLink>
                <Icon isSize="small"><span className="fa fa-text" aria-hidden="true" /></Icon>
                <span>Documents</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
      )
    );

storiesOf('Components/Bulma & bloomer inherited components/form components', module)
    .add('Overview', () =>
      (<form style={{width: '20rem', padding: '1rem'}}>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input type="text" placeholder="Text Input" />
          </Control>
        </Field>

        <Field>
          <Label>Username</Label>
          <Control hasIcons>
            <Input isColor="success" placeholder="Text Input" value="bloomer" />
          </Control>
          <Help isColor="success">This username is available</Help>
        </Field>

        <Field>
          <Label>Select:</Label>
          <Control>
            <Select>
              <option>Option 1</option>
              <option>Option 2</option>
            </Select>
          </Control>
        </Field>

        <Field>
          <Label>Message</Label>
          <Control>
            <TextArea placeholder={'<TextArea />'} />
          </Control>
        </Field>

        <Field>
          <Control>
            <Checkbox> I agree </Checkbox>
          </Control>
        </Field>

        <Field>
          <Control>
            <Radio name="question"> Yes </Radio>
            <Radio name="question"> No </Radio>
          </Control>
        </Field>

        <Field isGrouped>
          <Control>
            <Button isColor="primary">Submit</Button>
          </Control>
          <Control>
            <Button isLink>Cancel</Button>
          </Control>
        </Field>
      </form>)
    );

storiesOf('Components/Bulma & bloomer inherited components/Pannel', module)
        .add('Overview', () => (
          <Panel>
            <PanelHeading>Repositories</PanelHeading>
            <PanelBlock>
              <Control hasIcons="left">
                <Input isSize="small" placeholder="Search" />
                <Icon isSize="small" isAlign="left">
                  <span className="fa fa-search" aria-hidden="true" />
                </Icon>
              </Control>
            </PanelBlock>
            <PanelTabs>
              <PanelTab isActive>All</PanelTab>
              <PanelTab>Public</PanelTab>
              <PanelTab>Private</PanelTab>
              <PanelTab>Sources</PanelTab>
              <PanelTab>Fork</PanelTab>
            </PanelTabs>
            <PanelBlock isActive>
              <PanelIcon className="fa fa-book" />
        Bloomer
            </PanelBlock>
            <PanelBlock>
              <PanelIcon className="fa fa-code-fork" />
        RxJS
            </PanelBlock>
            <PanelBlock>
              <PanelIcon className="fa fa-code-fork" />
        Webpack
            </PanelBlock>
            <PanelBlock>
              <PanelIcon className="fa fa-code-fork" />
        Typescript
            </PanelBlock>
            <PanelBlock tag="label">
              <Checkbox> Remember me</Checkbox>
            </PanelBlock>
            <PanelBlock>
              <Button isOutlined isFullWidth isColor="primary"> Reset all filters</Button>
            </PanelBlock>
          </Panel>
        ));


  /*

  Container,
  Footer,
  Section,
*/
