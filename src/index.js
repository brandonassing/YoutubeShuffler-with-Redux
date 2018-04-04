import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import { changeVid, changeShow } from './actions/index';

const store = createStore(rootReducer);
window.store = store;
console.log(store.getState());

store.dispatch(changeShow({
  show: "The Office",
  video: {
    src: "https://www.youtube.com/embed/Vmb1tqYqyII",
    title: "First Aid"
  }

}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
