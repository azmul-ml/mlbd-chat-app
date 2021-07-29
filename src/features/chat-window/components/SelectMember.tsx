import React from "react";
import Select from "react-select";

function SelectField(props: any) {
  const handleChange = (value: any) => {
    const { onChange, name } = props;

    onChange(name, value);
  };

  const handleBlur = () => {
    const { onBlur, name } = props;

    onBlur(name, true);
  };

  const {
    id,
    placeholder,
    options,
    value,
    isMulti,
    isDisabled,
    touched,
    error,
    isClearable,
    backspaceRemovesValue,
  } = props;

  return (
    <div className="input-field-wrapper">
      <Select
        id={id}
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        touched={touched}
        error={error}
        isMulti={isMulti}
        isDisabled={isDisabled}
        isClearable={isClearable}
        backspaceRemovesValue={backspaceRemovesValue}
        components={{ ClearIndicator: null }}
      />

      {touched && error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}

export { SelectField };
