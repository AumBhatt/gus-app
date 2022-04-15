import './App.css';
import React, { useState } from 'react';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';
import UserContainer from './components/UsersContainer';
import gusbanner from './logos/GUSLogo2.png'

function App() {
  const [searchData, setSearchData] = useState();
  const getSearchData = (data) => {
    console.log(data)
    setSearchData(data);
  };
  return (
    <div className="App">
      <div className='banner'>
        <img src={gusbanner}></img>
      </div>
      <Search getSearchDataProp={getSearchData} ></Search>
      <UserContainer searchData={searchData}></UserContainer>
    </div>
  );
}

export default App;
