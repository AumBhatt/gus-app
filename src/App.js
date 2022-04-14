import './App.css';
import React, { useState } from 'react';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';
import UserContainer from './components/UsersContainer';

function App() {
  const [searchData, setSearchData] = useState();
  const getSearchData = (data) => {
    console.log(data)
    setSearchData(data);
  };
  return (
    <div className="App">
      <UserDataContextProvider>
        <Search getSearchDataProp={getSearchData} ></Search>
        <UserContainer searchData={searchData}></UserContainer>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
