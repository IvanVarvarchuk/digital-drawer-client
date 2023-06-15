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
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/auth-context/auth-context';
import ProtectedRoute from './components/protected-route/protected-route';
import { routes } from './config/routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routes.index} element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<AboutUs />} />
      <Route
        path={routes.profile} 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.convert}
        element={
          <ProtectedRoute>
            <Convert />
          </ProtectedRoute>
        }
      />
      <Route
        path={routes.convesionHistory} 
        element={
          <ProtectedRoute>
            <ConversionHistory />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
