import type { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button
} satisfies Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: 'primary',
//   children: 'Primary',
// };

// Primary.storyName = 'Primary button'

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
