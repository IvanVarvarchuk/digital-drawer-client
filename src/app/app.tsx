// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from 'react-router-dom';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import Home from './pages/home/home';
import Convert from './pages/convert/convert';
import ConversionHistory from './pages/conversion-history/conversion-history';
import AboutUs from './pages/about-us/about-us';
import Profile from './pages/profile/profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='my-profile' element={<Profile />} />
      <Route path="convert" element={<Convert />} />
      <Route path="conversion-history" element={<ConversionHistory />} />
    </Route>
  )
)

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/convert">Convert</Link>
          </li>
          <li>
            <Link to="/conversion-history">Conversion History</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
