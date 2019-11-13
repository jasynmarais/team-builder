import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

const initialTeamMembers = [
  {
    id: uuid(),
    name: 'Babou',
    email: 'babou@cyberdyne.net',
    role: 'Frontend Developer'
  },
  {
    id: uuid(),
    name: 'Mojo',
    email: 'mojo@cyberdyne.net',
    role: 'Backend Engineer'
  }
];

function App() {
  const [teamMembersList, setTeamMembersList] = useState(initialTeamMembers);

  return (
    <div className="App">
      <Form />
      <TeamMembers teamMembers={teamMembersList} />
    </div>
  );
}

export default App;
