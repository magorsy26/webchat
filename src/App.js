import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import MessageList from './components/messageListe';
import Writer from './components/writer';
import { store } from './redux';
import Login from './components/login';

function App() {
  if(sessionStorage.getItem("name")===null){
    return(
      <Login></Login>
    )
  }

  return (
    <Provider store={store}>
      <div className='content'>
        <div>
          <MessageList />
        </div>
        <div className='writer'>
          <Writer />
        </div>
      </div>
      
    </Provider>
  );
}

export default App;
