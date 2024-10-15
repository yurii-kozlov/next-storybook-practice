import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@chakra-ui/react";

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked'}
  }
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args}/>;

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'green',
  children: 'Success'
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger'
};

export const Default = Template.bind({});
Default.args = {
  colorScheme: 'blue',
  children: 'Default'
};

export const Log = () => <Button colorScheme='blue' onClick={() => console.log('click happens')}>Log</Button>
