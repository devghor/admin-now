import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { pathConstant } from '../constants';

type Props = {
  children: ReactElement;
};
const Guard = ({ children }: Props) => {
  const { authenticated } = useAuth();
  // if (!authenticated) {
  // return <Navigate to={pathConstant.AUTH_LOGIN.path} />;
  // }
  return <div>{children}</div>;
};

export default Guard;
