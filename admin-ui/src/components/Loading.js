import React from "react";
import { Spinner } from "react-bootstrap";
// Compare this snippet from admin-ui/src/components/Loading.js:
function Loading({ size = 100, className }) {
  return (
    <div className={className}>
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
      />
    </div>
  );
}

export default Loading;