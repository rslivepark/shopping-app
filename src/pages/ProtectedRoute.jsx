import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, reqireAdmin }) {
  const { user } = useAuthContext();
  if (!user || (reqireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}

// 로그인한 사용자가 있는지 확인
// 그 사용자가 어드민 권한이 있는지 확인
// reqireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야 함
// 조건에 맞지 않으면 / 상위 경로로 이동
// 조건에 맞는 경우에만 전달된 children을 보여줌
