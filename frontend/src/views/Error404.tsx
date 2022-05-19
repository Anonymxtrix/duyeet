import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import { ReactComponent as SvgPageNotFound } from "images/undraw_page_not_found.svg";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Error404: React.FC = () => {
  return (
    <Page title="Page Not Found">
      <CenteringBox>
        <Stack spacing={3} display="flex" alignItems="center">
          <SvgPageNotFound
            width="100%"
            style={{ maxWidth: 500, maxHeight: 340 }}
          />
          <Typography variant="h3">Page not found</Typography>
          <Typography variant="body1" textAlign="center">
            The page you are looking for doesn't exist. <br />
            Go back to choose another direction.
          </Typography>
        </Stack>
      </CenteringBox>
    </Page>
  );
};

export default Error404;
