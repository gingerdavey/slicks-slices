import { useState } from 'react';

const UseForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if it's a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // copy existing values
      ...values,
      // update the value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
};

export default UseForm;
