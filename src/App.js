import './App.css';
import { UserDataContext, UserDataContextProvider } from './components/contexts/UserContextData';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <UserDataContextProvider>
        <Search></Search>
      </UserDataContextProvider>
    </div>
  );
}

export default App;
