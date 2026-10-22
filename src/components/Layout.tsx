import { Link, NavLink, useLocation } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../utils/storage';

const pages = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/stories', label: 'Stories' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faqs', label: 'FAQs' },
];

const Layout = ({ children, homeVariant = false }: { children: React.ReactNode; homeVariant?: boolean }) => {
  const currentUser = getCurrentUser();
  const location = useLocation();

  return (
    <div className={homeVariant ? 'page-shell page-shell--home' : 'page-shell'}>
      <header className={homeVariant ? 'site-header site-header--home' : 'site-header'}>
        <div className="site-header__inner">
          <Link to="/" className="brand-mark" aria-label="Dear Tomorrow home">
            DEAR TOMORROW
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {pages.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            {currentUser ? (
              <>
                <Link to="/dashboard" className="nav-button nav-button--ghost">
                  Dashboard
                </Link>
                <button
                  type="button"
                  className="nav-button nav-button--primary"
                  onClick={() => {
                    logoutUser();
                    window.location.href = '/';
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-button nav-button--ghost">
                  Log in
                </Link>
                <Link to="/signup" className="nav-button nav-button--primary">
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className={location.pathname === '/' ? 'page-main page-main--home' : 'page-main'}>{children}</main>
    </div>
  );
};

export default Layout;
