import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
  <div>
    <Header />
    <div className={'outletContainer'}>
    <Outlet />
    </div>
  </div>
  )
}

export default Layout;
