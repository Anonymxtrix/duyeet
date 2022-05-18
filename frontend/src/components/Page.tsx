import { ReactNode } from "react";
import Helmet from "react-helmet";

interface Props {
  title: string;
  children?: ReactNode;
}

const Page: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <>
      <Helmet>
        <title>{title} - Duyeet</title>
      </Helmet>
      {children}
    </>
  );
};

export default Page;