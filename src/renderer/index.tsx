import App from './App';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '../store';


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>

), document.getElementById('root'));


window.electron.ipcRenderer.on("openNewPdf", function(event, args)  {
  console.log("DUMP from render", event, args);
})


