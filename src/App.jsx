import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound';
import Router from './datas/router';
import { store } from './stores/store';
import { Provider } from 'react-redux';
import Layout from './components/Layout';

function App() {

  let publicRouter = Router();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {publicRouter?.map((item, index) => (
              <Route key={index} path={item.path} element={item.component} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App
