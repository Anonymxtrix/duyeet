import { useFormContext, Controller } from "react-hook-form";
import Field, { FilledTextFieldProps } from "@mui/material/TextField";

interface Props extends FilledTextFieldProps {
  name: string;
}

const TextField: React.FC<Props> = (props) => {
  const { name, ...fieldProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { isDirty, error } }) => (
        <Field
          {...fieldProps}
          {...field}
          error={isDirty && Boolean(error)}
          helperText={isDirty && error && error.message}
        />
      )}
    />
  );
};

export default TextField;
