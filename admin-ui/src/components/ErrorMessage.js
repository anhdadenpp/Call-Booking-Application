import React from "react";
import { Alert } from "react-bootstrap";
// Compare this snippet from admin-ui/src/components/ErrorMessage.js:
const ErrorMessage = ({ variant = "info", children }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 15 }}>
      <strong>{children}</strong>
    </Alert>
  );
};

export default ErrorMessage;