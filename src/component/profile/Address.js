import React from "react";
import Alert from 'react-bootstrap/Alert';

const Address = () => {
  return (
    <>
      {/* Alert component with variant set to success */}
      <Alert variant="success">
        {/* Alert heading */}
        <Alert.Heading>Address:</Alert.Heading>
        <p>
          {/* Empty paragraph */}
        </p>
        <hr />
        <p className="mb-0">
          {/* Address details */}
          R. 28 de Janeiro 350,
          4400-335 Vila Nova de Gaia
          Portugal
        </p>
      </Alert>
    </>
  );
}

export default Address;
