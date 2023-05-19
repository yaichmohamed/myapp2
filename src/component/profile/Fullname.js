import React from "react";
import Alert from 'react-bootstrap/Alert';

const Fullname = () => {
  return (
    <>
      {/* Alert component with variant set to success */}
      <Alert variant="success">
        {/* Alert heading */}
        <Alert.Heading>Fullname:</Alert.Heading>
        <p>
          {/* Empty paragraph */}
        </p>
        <hr />
        <p className="mb-0">
          {/* Fullname details */}
          Cristiano Ronaldo dos Santos Aveiro, couramment appelé Cristiano Ronaldo ou Ronaldo et surnommé CR7,
        </p>
      </Alert>
    </>
  );
}

export default Fullname;
