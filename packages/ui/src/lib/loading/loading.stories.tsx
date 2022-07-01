import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from './loading';

export default {
  component: Loading,
  title: 'Loading',
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
