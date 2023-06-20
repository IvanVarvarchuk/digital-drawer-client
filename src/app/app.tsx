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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getAxios, setBaseUrl } from '../api/axios-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { initPersister, persisterDeserialize } from '../api/axios-client';

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
  const queryClient = new QueryClient();
  initPersister();
  const storagePersister = createSyncStoragePersister({
    storage: window.localStorage,
    deserialize: persisterDeserialize,
  });
  persistQueryClient({
    queryClient,
    persister: storagePersister,
  });
  setBaseUrl('https://localhost:7101');
  getAxios().interceptors.request.use(
    (config) => {
      config.headers.authorization = "Bearer " + window.localStorage.getItem('token')?.split("\"")[1];
      config.withCredentials = true;
      return config;
    }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen/> */}
    </QueryClientProvider>
  );
}

export default App;
