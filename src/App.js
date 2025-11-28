import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CakeContainer></CakeContainer>
      </Provider>
    </div>
  );
}

export default App;
