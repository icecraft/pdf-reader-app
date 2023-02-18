import App from './App';
import { Provider } from 'react-redux';
import store from '../store';
import { createRoot } from 'react-dom/client';
import { LOAD_PDF } from 'constants/actionTypes';



const container = document.getElementById('root')!;
const root = createRoot(container);
root.render( <Provider store={store}>
  <App />
</Provider>)


window.electron.ipcRenderer.on("openNewPdf", function(event, args)  {
  store.dispatch({type: LOAD_PDF, payload:event});
  console.log("DUMP from render", event, args);
  console.log("read state", store.getState());
})


