import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCake from './Components/HooksCake';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
         <CakeContainer></CakeContainer>
         <HooksCake/>
         <IceCreamContainer/>
         <hr></hr>
         <NewCakeContainer/>
         <hr></hr>
         <ItemContainer cake/>
         <ItemContainer iceCream/>
        </div>
      </Provider>
  );
}


export default App;
