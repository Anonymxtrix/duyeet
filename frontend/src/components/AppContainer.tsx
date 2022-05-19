/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { css } from "@emotion/react";
import Container from "@mui/material/Container";

interface Props {
  children?: ReactNode;
}

const AppContainer: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Container
      disableGutters
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      {children}
    </Container>
  );
};

export default AppContainer;
