import { loadStories } from "./load-stories";
import { configure, addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
// import { ThemeProvider } from "styled-components";

// Add a11y support
addDecorator(withA11y);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { "color-contrast": { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  options: {
    hierarchyRootSeparator: /\|/
  }
});

// Add knobs to all stories
addDecorator(withKnobs);

// Rebass / Styled Components theme provider wraps app
// addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// Load stories (usually in /src/)
configure(loadStories, module);
