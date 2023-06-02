import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
let reRender = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>
  );
};

reRender(store.getState());
store.subscribe(() => {
  let state = store.getState();
  reRender(state);
});
