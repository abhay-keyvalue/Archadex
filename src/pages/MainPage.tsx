import {Outlet, useNavigate, useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {IS_AUTHENTICATED} from '../constants/common';
import {routesPath} from '../constants/common';
import MainLayout from '../layout/MainLayout';

const MainPage = () => {
  const [isAuth, setIsAuth] = useState('false');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuth(localStorage.getItem(IS_AUTHENTICATED) as string);
  }, []);

  useEffect(() => {
    if (isAuth === 'true')
      navigate(location.pathname ? location.pathname : `/${routesPath.HOME}`);
    else
    navigate(`/${routesPath.SIGNIN}`);
  }, [isAuth]);

  if (localStorage.getItem(IS_AUTHENTICATED) === 'true')
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainPage;
