import { ReactNode } from "react";
import Box, { BoxProps } from "@mui/material/Box";

interface Props extends BoxProps {
  children?: ReactNode;
}

const CenteringBox: React.FC<Props> = (props) => {
  const { children, ...boxProps } = props;
  return (
    <Box
      display="flex"
      flexGrow={1}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default CenteringBox;
