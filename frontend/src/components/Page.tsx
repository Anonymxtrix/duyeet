import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Box, { BoxProps } from "@mui/material/Box";

interface Props extends BoxProps {
  title?: string;
  children?: ReactNode;
}

const Page: React.FC<Props> = (props) => {
  const { title, children, ...boxProps } = props;
  return (
    <Box display="flex" flexGrow={1} padding={3} {...boxProps}>
      <Helmet>{title && <title>{title} - Duyeet</title>}</Helmet>
      {children}
    </Box>
  );
};

export default Page;
