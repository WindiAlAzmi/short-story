import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound';
import Router from './datas/router';
import { store } from './stores/store';
import { Provider } from 'react-redux';

function App() {

  let publicRouter = Router();

  return (
   <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {publicRouter?.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
