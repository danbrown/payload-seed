import React, { useCallback } from "react";
import { useField, TextInput } from "payload/components/forms";

const TextArea: React.FC<any> = (props) => {
  const { path, name, label } = props;

  const field = useField({
    path,
  });

  const { showError, value, setValue } = field;

  const onChange = useCallback(
    (e) => {
      const { value: incomingValue } = e.target;
      setValue(incomingValue);
    },
    [setValue]
  );

  return (
    <TextInput
      path={path}
      name={name}
      value={(value as string) || ""}
      label={label}
      onChange={onChange}
      showError={showError}
    />
  );
};

export default TextArea;
