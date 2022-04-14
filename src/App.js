import './App.css';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <UserDataContextProvider>
        <Search></Search>
        <div className='user-card-container'>
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
          <UserCard></UserCard>
          <UserCard></UserCard>
        </div>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
