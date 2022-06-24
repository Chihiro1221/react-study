import App from '../App12';
import Home from '../pages/Home';
import List from '../pages/List';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list/:id" element={<List />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
