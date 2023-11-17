import './App.css';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = ():JSX.Element => {  

  return (
    <BrowserRouter>
      <div className="page">
        <Layout>
          <Routes>
            <Route path='/catalog' element={<Catalog />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>          
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
