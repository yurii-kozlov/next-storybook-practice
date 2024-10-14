import { withConsole as withConsoleAddon } from '@storybook/addon-console';
import { StoryContext, StoryFn } from '@storybook/react';

export const withConsole = (story: StoryFn<any>, context: StoryContext<any>) => withConsoleAddon()(story)(context)