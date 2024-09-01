import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import 'antd/dist/reset.css';
import './App.css';

function startApp() {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <ConfigProvider>
        <App />
      </ConfigProvider>
    );
  }


// (async () => {
//   const { worker } = await import('./msw/browser')
//    return worker.start()
// })().then(startApp);

startApp()

