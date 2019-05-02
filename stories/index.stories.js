import React from 'react';

import {storiesOf} from '@storybook/react';
import Md from 'react-markdown';

import theme from '../src/themes/default/bulma.theme.scss';/* eslint no-unused-vars : 0*/

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
