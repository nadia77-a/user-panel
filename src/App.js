import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import { store } from 'redux-store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <Provider store={store}>
      <Root />
      <ToastContainer></ToastContainer>
    </Provider>
   
  );
}

 export default App;
