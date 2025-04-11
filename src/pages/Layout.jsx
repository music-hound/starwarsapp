import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const isNotFoundPage = location.pathname === `/404`

  return (
  <div>
    {!isNotFoundPage && <Header />}
    <div
    className={'outletContainer'}
    >
    <Outlet />
    </div>
  </div>
  )
}

export default Layout;
