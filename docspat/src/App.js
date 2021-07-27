import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/conFigureStore'


const store = ConfigureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
