import React, {useState} from 'react';

import {storiesOf} from '@storybook/react';
import Md from 'react-markdown';

import theme from '../src/themes/default/bulma.theme.scss';/* eslint no-unused-vars : 0*/

import lorem from 'fast-lorem-ipsum';

/*
 * Components
 */
import {

  AccordionContainer,
  AccordionElement,
  ActionableTable,
  ActionCard,

  ButtonsRow,
  ColorPicker,

  Collapsable,
  CodeEditor,

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


  DropZone,

  Dropdown,

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

  HelpPin,


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
        <Subtitle>Default subtitle</Subtitle>
        <Subtitle isSize={1}>Subtitle size 1</Subtitle>
        <Subtitle isSize={2}>Subtitle size 2</Subtitle>
        <Subtitle isSize={3}>Subtitle size 3</Subtitle>
        <Subtitle isSize={4}>Subtitle size 4</Subtitle>
        <Subtitle isSize={5}>Subtitle size 5</Subtitle>
        <Subtitle isSize={6}>Subtitle size 6</Subtitle>
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
              <Card title="Modal title" bodyContent="Modal content" />
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

storiesOf('Components/Library custom components/Accordion', module)
          .add('Overview', () => {
            return (
              <AccordionContainer>
                <AccordionElement title="Element 1">
                Content
                </AccordionElement>
                <AccordionElement title="Element 2">
                Content
                </AccordionElement>
                <AccordionElement isSelected title="Element 3 selected">
                Content
                </AccordionElement>
              </AccordionContainer>
            );
          });

storiesOf('Components/Library custom components/ActionableTable', module)
          .add('Overview', () => {
            const columnsNames = ['Publisher', 'Journal title', 'Article title', 'Cost', 'Author', 'Year'];

            const createMockData = (rowsNumber = 200) => {
              const output = [];
              for (let i = 0; i < rowsNumber; i++) {
                const row = columnsNames.reduce((res, columnName) => {
                  const base = lorem(200, 'w').split(' ');
                  const length = parseInt(Math.random() * 7 + 2, 10);
                  const from = parseInt(Math.random() * (100 - length), 10);
                  const to = from + length;
                  const value = base.slice(from, to).join(' ');
                  return {
                    ...res,
                    [columnName]: value
                  };
                }, {});
                output.push(row);
              }
              return output;
            };
            return (
              <ActionableTable
                onColumnAction={column => console.log('on click', column)/* eslint no-console: 0 */}
                values={createMockData()}
                columnNames={columnsNames}
                actionMessage={'action !'} />
            );
          });
storiesOf('Components/Library custom components/ActionCard', module)
          .add('Overview', () => (<ActionCard>Action !</ActionCard>));

const BtnRow = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <ButtonsRow>
      <Button onClick={() => setActiveBtn(1)} isColor={activeBtn === 1 ? 'primary' : undefined}>1</Button>
      <Button onClick={() => setActiveBtn(2)} isColor={activeBtn === 2 ? 'primary' : undefined}>2</Button>
      <Button onClick={() => setActiveBtn(3)} isColor={activeBtn === 3 ? 'primary' : undefined}>3</Button>
    </ButtonsRow>
  );
};
storiesOf('Components/Library custom components/ButtonsRow', module)
          .add('Overview', () => <BtnRow />);

storiesOf('Components/Library custom components/Card', module)
  .add('Example', () => (
    <Card
      title={'Title'}
      subtitle={'Subtitle'}
      bodyContent={'Nice body content'}
      // footerActions = {[{label: 'Action 1', id : 1}, {label: 'Action 2', id: 2}]}
      asideActions={[{label: 'Action 1', id: 1, isColor: 'primary'}, {label: 'Action 2', id: 2}]} />
  ));

const CodeExample = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <CodeEditor
        value={value}
        onChange={setValue} />
    </div>
  );
};
storiesOf('Components/Library custom components/CodeEditor', module)
  .add('Example', () => <CodeExample />);

const CollapsableExample = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Collapsable isCollapsed={active !== 1}>
        Item 1 <Button onClick={() => setActive(2)} >Click to collapse</Button>
      </Collapsable>
      <Collapsable isCollapsed={active !== 2}>
        Item 2 <Button onClick={() => setActive(1)} >Click to collapse</Button>
      </Collapsable>
    </div>
  );
};
storiesOf('Components/Library custom components/Collapsable', module)
  .add('Example', () => <CollapsableExample />);

const ColorPickerTest = () => {
  const [color, setColor] = useState('red');
  return (
    <ColorPicker
      color={color}
      onChange={c => setColor(c)} />
  );
};
storiesOf('Components/Library custom components/ColorPicker', module)
  .add('Default', () => <ColorPickerTest />);

const DropDownTest = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState(1);
  const options = [{label: 'Option 1', id: 1}, {label: 'Option 2', id: 2}];
  return (
    <Dropdown
      onToggle={() => setIsActive(!isActive)}
      isActive={isActive}
      closeOnChange
      value={value}
      onChange={v => setValue(v)}
      options={options}>
      {options.find(o => o.id === value).label}
    </Dropdown>
  );
};
storiesOf('Components/Library custom components/Dropdown', module)
  .add('Example', () => <DropDownTest />
);

storiesOf('Components/Library custom components/DropZone', module)
  .add('default', () => <DropZone>Drop some stuff in here</DropZone>);

storiesOf('Components/Library custom components/HelpPin', module)
  .add('Example', () => (
    <div>
      Here is a text needing some explanation<HelpPin>Here is the explanation</HelpPin>
    </div>
  ));

  /*

  Container,
  Footer,
  Section,
*/
