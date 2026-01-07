import React from 'react';

const InvitationForm = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>Event Details</h2>
      <input name="title" placeholder="Event Name" onChange={handleChange} />
      <input name="date" type="date" onChange={handleChange} />
      <input name="location" placeholder="Venue" onChange={handleChange} />
      <textarea name="message" placeholder="Invitation Message" onChange={handleChange} />
    </div>
  );
};

export default InvitationForm;