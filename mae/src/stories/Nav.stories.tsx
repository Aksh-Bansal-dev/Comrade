import React from 'react';
import { Story, Meta } from '@storybook/react';

import Nav, { NavProps } from '../modules/Nav/nav';

export default {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {}
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const FirstDesign = Template.bind({});
FirstDesign.args = {};
