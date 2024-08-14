import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChanged } from '../api/firebase';
import User from './User';
export default function NavBar() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header className='flex justify-between border-b boder-grey-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}

// 로그아웃하면 다시 로그인되는 문제 발생 >> onAuthStateChanged 사용
