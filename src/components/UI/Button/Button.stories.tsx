import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button
} satisfies Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success'
}
