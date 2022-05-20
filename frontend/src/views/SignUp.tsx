import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import SignUpCard from "components/SignUpCard";

const SignUp: React.FC = () => {
  return (
    <Page title="Sign Up">
      <CenteringBox>
        <SignUpCard />
      </CenteringBox>
    </Page>
  );
};

export default SignUp;
