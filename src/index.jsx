import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './Features/user';
import postsReducer from './Features/posts';
import postReducer from './Features/post';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    post: postReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
