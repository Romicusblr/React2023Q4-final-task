import { FC } from 'react';
import Footer from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="flex flex-col container mx-auto px-3 min-h-screen">
      <Header />
      <main className="flex justify-center items-center grow relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
