import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';

// for redux access
import appStore from './utils/appStore';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'Netflix2';
  }, []);

  return (
    <Provider store={appStore}><Body /></Provider>
  );
}

export default App;
