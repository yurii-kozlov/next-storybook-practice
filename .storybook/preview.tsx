import type { Preview } from "@storybook/react";
import { withCenter } from "./decorators/withCenter";
import { withThemeProvider } from "./decorators/withThemeProvider";
import { withConsole } from "./decorators/withConsole";
import "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
    },
  },
  decorators: [withThemeProvider, withCenter, withConsole, withKnobs],
};

export default preview;
