import React from "react";

export const Textarea = (props) => {
  return (
    <textarea
      class="form-control"
      placeholder={props?.placeholder}
      rows="5"
      {...props}
    />
  );
};
