import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthContextProvider } from './components/context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <NavBar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;

// routing
// home >> Home
// products >> AllProducts
// products/new >> NewProduct
// products/:id >> ProductDetail
// carts >> MyCart
