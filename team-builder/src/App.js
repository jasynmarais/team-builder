import React, { useState } from 'react';
import uuid from 'uuid';
import './App.css';

import Team from './components/Team';
import Form from './components/Form';

// Default State
const initialTeamState = [
  {
    id: uuid(),
    name: 'Babou the Ocelot',
    email: 'babou@cyberdyne.net',
    role: 'Frontend Developer'
  },
  {
    id: uuid(),
    name: 'Mojo the Helper Monkey',
    email: 'mojo@cyberdyne.net',
    role: 'Backend Engineer'
  }
];

const initialFormState = {
  name: '',
  email: '',
  role: ''
};

function App() {
  // Set State for App
  const [teamForm, setTeamForm] = useState(initialFormState);
  const [teamList, setTeamList] = useState(initialTeamState);
  const [ memberToEdit, setMemberToEdit ] = useState({});
  
  // Handler Functions
  const handleClick = id => {
    const member = teamList.filter(item => item.id === id);
    setMemberToEdit(member[0]);
    setTeamForm(member[0]);
  }

  const handleChange = e => {
    setTeamForm({
      ...teamForm,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, role } = teamForm;

    if(name && email && role) {
      const submittedValues = [{
        id: uuid(),
        name: name,
        email: email,
        role: role
      }]

      const newTeamList = submittedValues.concat(teamList);
      setTeamList(newTeamList);
      setTeamForm(initialFormState);
    }
  }

  return (
    <div className="App">
      <h1>The Team Needs You!</h1>
      <Form 
        teamForm={teamForm}
        memberToEdit={memberToEdit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Team teamList={teamList} handleClick={handleClick} />
    </div>
  );
}

export default App;
