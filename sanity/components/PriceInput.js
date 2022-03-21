import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => {
  const { title, description, name } = type;
  return (
    <>
      <h2>
        {title} - {formatMoney(value / 100)}
      </h2>
      <p>{description}</p>
      <input
        type={name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </>
  );
};

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
