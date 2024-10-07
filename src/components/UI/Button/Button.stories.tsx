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
  children: 'Primary',
};
Primary.storyName = 'Primary button'

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary'
};
Secondary.storyName = 'Secondary button'

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger'
};
Danger.storyName = 'Danger button'

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success'
}
Success.storyName = 'Success button'
