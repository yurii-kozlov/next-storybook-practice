import type { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';
import { Center } from '../decorators/Center';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button'
  },
  // Decorators are components that wrap a story;
  decorators: [
    (Story) => <Center><Story /></Center>
  ]
} satisfies Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary',
};

PrimaryA.storyName = 'Primary button';


// If we have a lot of stories, sometimes we need to reuse the args object from another story
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args'
};

// Below the component is going to be used within another story
// that's why Template wasn't used as args have to be passed directly
export const PrimaryButton = () => <Button variant="primary">Primary</Button>

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
