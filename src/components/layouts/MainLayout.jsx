import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-terminal-black">
      <Sidebar />
      <main className="flex-1 ml-72">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout; 