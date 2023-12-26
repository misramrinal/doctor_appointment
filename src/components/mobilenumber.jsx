import React, { useState } from 'react';

const MobileNumberForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of mobile number, for example, you can send it to an API or perform validation
    console.log('Submitted mobile number:', mobileNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mobileNumber">Enter Mobile Number:</label>
      <input
        type="tel"
        id="mobileNumber"
        name="mobileNumber"
        value={mobileNumber}
        onChange={handleChange}
        placeholder="Enter your mobile number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MobileNumberForm;
