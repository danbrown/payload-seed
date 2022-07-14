import React, { useCallback } from "react";
import { useField, SelectInput } from "payload/components/forms";

const Select: React.FC<any> = (props) => {
  const { path, name, label, options } = props;

  const { showError, value, setValue } = useField({
    path,
  });

  const onChange = useCallback(
    (incomingOption) => {
      const { value: incomingValue } = incomingOption;

      const sendToCRM = async () => {
        try {
          const req = await fetch("https://fake-crm.com", {
            method: "post",
            body: JSON.stringify({
              someKey: incomingValue,
            }),
          });

          const res = await req.json();
          if (res.ok) {
            console.log("Successfully synced to CRM."); // eslint-disable-line no-console
          }
        } catch (e) {
          console.error(e);
        }
      };

      sendToCRM();
      setValue(incomingValue);
    },
    [setValue]
  );

  return (
    <SelectInput
      path={path}
      name={name}
      label={label}
      options={options}
      value={value as string}
      onChange={onChange}
      showError={showError}
    />
  );
};

export default Select;
