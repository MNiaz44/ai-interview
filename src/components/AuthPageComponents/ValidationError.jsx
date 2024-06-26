import React from "react";

const ValidationError = ({ touched, error }) => {
  return touched && error ? (
    <p className="text-red-700  pt-2 text-sm">{error}</p>
  ) : null;
};

export default ValidationError;
