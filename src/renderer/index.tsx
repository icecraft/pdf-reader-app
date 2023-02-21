import App from './App';
import { Provider } from 'react-redux';
import store from '../store';
import { createRoot } from 'react-dom/client';
import { LOAD_PDF, UPDATE_TRANSLATE_CONTENT } from 'constants/actionTypes';


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render( <Provider store={store}>
  <App />
</Provider>)


window.electron.ipcRenderer.on("openNewPdf", function(event)  {
  store.dispatch({type: LOAD_PDF, payload:event});
  console.log("DUMP from render", typeof event);
  console.log("read state", store.getState());
})

window.electron.ipcRenderer.on("translateWord", function(event)  {
  const payload = JSON.parse(event);
  store.dispatch({type: UPDATE_TRANSLATE_CONTENT, payload});
  console.log("DUMP from render", typeof event);
  console.log("read state", store.getState());
})
