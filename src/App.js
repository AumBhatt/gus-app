import './App.css';
import React, { useState } from 'react';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';
import UserContainer from './components/UsersContainer';
import gusLogo from './images/GUSLogo1.svg'

function App() {
  console.log(process.env.REACT_APP_REDIS_SERVER_URL)
  const [searchData, setSearchData] = useState();
  const getSearchData = (data) => {
    console.log(data)
    setSearchData(data);
  };
  return (
    <div className="App">
      <div className='banner'>
        <div className='banner-logo'>
          <img className='banner-image' src={gusLogo}></img> GUS
        </div>
        GitHub-User-Search
      </div>
      <Search getSearchDataProp={getSearchData} ></Search>
      <UserContainer searchData={searchData}></UserContainer>
    </div>
  );
}

export default App;
