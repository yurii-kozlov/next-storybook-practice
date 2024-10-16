import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@chakra-ui/react";
import { text, boolean } from '@storybook/addon-knobs'

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
  children: 'Danger',
  onClick: () => console.log(process.env.EXAMPLE_VAR)
};

export const Default = Template.bind({});
Default.args = {
  colorScheme: 'blue',
  children: 'Default'
};

export const Log = () => <Button colorScheme='blue' onClick={() => console.log('click happens', process.env.STORYBOOK_THEME)}>Log</Button>

export const Knobs = () => (
  <Button 
    colorScheme={text('colorScheme', 'purple')}
    isDisabled={boolean('isDisabled', false)}
    onClick={() => console.log(process.env.STORYBOOK_DATA_TESTING_KEY)}
    >
    {text('Label', 'Button label')}
  </Button>
)
