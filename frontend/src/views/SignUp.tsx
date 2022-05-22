import CenteringBox from "components/CenteringBox";
import Page from "components/Page";
import SignUpCard from "components/SignUpCard";
import useSignUp from "hooks/useSignUp";

const SignUp: React.FC = () => {
  const { signUp } = useSignUp();

  return (
    <Page title="Sign Up">
      <CenteringBox>
        <SignUpCard signUp={signUp} />
      </CenteringBox>
    </Page>
  );
};

export default SignUp;
