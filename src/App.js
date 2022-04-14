import './App.css';
import React, { useState } from 'react';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  const [childData, setChildData] = useState();
  const childToParent = (data) => {
    console.log(data)
  };
  return (
    <div className="App">
      <UserDataContextProvider>
        <Search childToParentProp={childToParent} ></Search>
        <div className='user-card-container'>
          {/* <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard>
          <UserCard></UserCard> */}
        </div>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
