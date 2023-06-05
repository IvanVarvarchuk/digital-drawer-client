// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// import styles from './app.module.css';
import Home from './pages/home/home';
import Convert from './pages/convert/convert';
import ConversionHistory from './pages/conversion-history/conversion-history';
import AboutUs from './pages/about-us/about-us';
import Profile from './pages/profile/profile';
import PageLayout from './components/page-layout/page-layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="my-profile" element={<Profile />} />
      <Route path="convert" element={<Convert />} />
      <Route path="conversion-history" element={<ConversionHistory />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
