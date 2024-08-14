import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

// routing
// home >> Home
// products >> AllProducts
// products/new >> NewProduct
// products/:id >> ProductDetail
// carts >> MyCart
