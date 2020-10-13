import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 0;
  background-color: rebeccapurple;
  color: #f2f2f2;
  padding: 0.75em 1em;
  border-radius: 0.5em;
`;

storiesOf("Button", module)
  .add("with text", () => <StyledButton>Hello Button</StyledButton>)
  .add("with emoji", () => (
    <StyledButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </StyledButton>
  ));
