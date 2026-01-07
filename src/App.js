import React, { useState } from 'react';
import './App.css';
import InvitationForm from './components/InvitationForm';
import InvitationCard from './components/InvitationCard';

function App() {
  const [eventData, setEventData] = useState({
    title: '', date: '', location: '', message: ''
  });

  return (
    <div className="main-page">
      <header className="assignment-header">
        <h1>Rotaract Event Manager</h1>
        <p>Assignment 6: Online Invitation System</p>
      </header>
      
      {/* THIS IS THE KEY CONTAINER */}
      <div className="dashboard-flex">
        <InvitationForm data={eventData} setData={setEventData} />
        <InvitationCard data={eventData} />
      </div>
    </div>
  );
}

export default App;