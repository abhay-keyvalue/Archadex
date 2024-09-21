import {useEffect, useState, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

import {DummyProfile, DownArrow, Burgermenu} from '../assets';
import {routesPath} from '../constants/common';
import Avatar from '../components/Avatar';
import {useOutsideClickAlerter} from '../hooks/useOutsideClickAlerter';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);
  const [isLanguageOptionsOpen, setIsLanguageOptionsOpen] = useState(false);
  const {t} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {title: 'home', route: `/${routesPath.HOME}`},
  ];

  useOutsideClickAlerter(
    modalRef,
    () => {
      setIsProfileOptionsOpen(false);
      setIsLanguageOptionsOpen(false);
    },
    buttonRef
  );

  const handleLogout = async () => {
//Todo
  };


  useEffect(() => {
//Todo
  }, []);

  return (
    <div className='bg-primary-bg h-full w-full overflow-hidden'>
      <div className='flex flex-row justify-between items-center px-2 sm:px-16 py-0.5 sm:py-0 bg-white'>
        <div className='flex flex-row items-center gap-1'>
          <img
            src={Burgermenu}
            alt='burger-menu'
            className='block sm:hidden mx-2'
            height={32}
            width={32}
          />
          <div className='sm:flex flex-row gap-1 hidden'>
            {tabs.map((tab) => (
              <Tab
                key={tab.title}
                title={t(tab.title)}
                active={tab.route === location.pathname}
                onClick={() => navigate(tab.route)}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <div
            className='sm:flex flex-row items-center gap-2 cursor-pointer mx-4 hidden'
            onClick={() => setIsLanguageOptionsOpen(true)}
            ref={buttonRef}
          >
            <h1 className='text-sm text-court-black'>{i18next?.language}</h1>
            <img src={DownArrow} alt={'down-arrow'} height={10} width={10} />
          </div>
          <div onClick={() => setIsProfileOptionsOpen(true)} ref={buttonRef}>
            <Avatar imageSrc={DummyProfile} />
          </div>
          {isLanguageOptionsOpen && (
            <div
              className='absolute right-20 top-14 bg-white p rounded-md shadow-md'
              ref={modalRef}
            >
            </div>
          )}
          {isProfileOptionsOpen && (
            <div className='absolute right-14 top-14 bg-white rounded-md shadow-md' ref={modalRef}>
              <div className='cursor-pointer p-2 px-4 hover:bg-blue-100' onClick={handleLogout}>
                {t('logout')}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='overflow-hidden' style={{height: `calc(100% - 65px)`}}>
        {children}
      </div>
    </div>
  );
};

interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({title, active, onClick}: TabProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 text-lg  border-b-[5px] ${active ? 'opacity-100 font-semibold border-court-black' : 'opacity-50 font-medium border-white'} text-court-black`}
    >
      {title}
    </div>
  );
};

export default MainLayout;
