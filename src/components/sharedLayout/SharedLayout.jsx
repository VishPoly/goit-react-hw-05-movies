// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
import { LayoutContainer, Header, Link } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> */}
    </LayoutContainer>
  );
};

export default SharedLayout;
