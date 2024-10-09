import { StoryFn, Meta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Form/Input',
  component: Input
} satisfies Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Small size'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'Medium size'
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   placeholder: 'Large size'
// };

// Below the component is going to be used within another story
// that's why Template wasn't used as args have to be passed directly
export const Large = () => <Input size='large' placeholder='Large size'/>
