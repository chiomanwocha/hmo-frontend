import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/home';
import RecordingDetails from '../components/recording-details';
import Login from '../components/login';
import Dashboard from '../components/dashboard';
import FileDetails from '../components/file-details';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/recording-details/:id',
    element: <RecordingDetails />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/dashboard/video-details',
    element: <FileDetails />
  },
  {
    name: '404',
    path: '*',
    element: <p>not found!</p>
  },
//   {
//     path: '/image-gallery',
//     element: <ProtectedGallery />
//   }
]);