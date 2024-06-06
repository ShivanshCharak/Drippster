import React from 'react';
import { createRoot } from 'react-dom/client'; // New root API for React 18
import {PopUpContextProvider} from './context/PopUpContext'; // Import PopUpContextProvider
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ProductInfoContextProvider } from './context/productInfoContext';
import {ToastContainer} from 'react-toastify'

import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';
import { AccessTokenContextProvider } from './context/accessTokenContext';
import { AuthTypeContextProvider } from './context/authTypeContext';
import { UserDetailsContextProvider } from './context/userDetailsContext';
import 'react-toastify/dist/ReactToastify.css';

// import Stripe from './utils/stripe';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  

      <PopUpContextProvider>
        <ProductInfoContextProvider>
          <AccessTokenContextProvider>
          <AuthTypeContextProvider>
            <UserDetailsContextProvider>

            <BrowserRouter>
            <App/>
            <ToastContainer/>
            </BrowserRouter>
            </UserDetailsContextProvider>
          </AuthTypeContextProvider>
          </AccessTokenContextProvider>

        </ProductInfoContextProvider>
      
  </PopUpContextProvider>
  </Provider>

);
