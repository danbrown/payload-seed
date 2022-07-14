import React, { useCallback } from "react";
import { useField, TextInput } from "payload/components/forms";

const Text: React.FC<any> = (props) => {
  const { path, name, label } = props;

  const field = useField({
    path,
    enableDebouncedValue: true,
  });

  const { showError, value, setValue } = field;

  const onChange = useCallback(
    (e) => {
      const { value: incomingValue } = e.target;
      const valueWithoutSpaces = incomingValue.replace(/\s/g, "");
      setValue(valueWithoutSpaces);
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

export default Text;
