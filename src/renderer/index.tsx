import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);


window.electron.ipcRenderer.on("openNewPdf", function(event, args)  {
  console.log("DUMP from render", event, args);
})


