import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound';
import Router from './datas/Router';
import { store } from './stores/store';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {

  let publicRouter = Router();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
