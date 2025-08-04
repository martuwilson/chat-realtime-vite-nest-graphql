import { Outlet } from 'react-router-dom';
import Guard from './auth/Guard';

const Layout = () => {
    return (
        <Guard>
            <Outlet />
        </Guard>
    );
};

export default Layout;
