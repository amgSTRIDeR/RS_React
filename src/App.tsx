import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.component';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route
          path="error"
          element={<ErrorPage header="(Some error on the page)" />}
        />
        <Route path="*" element={<ErrorPage header="(404 not found)" />} />
      </Route>
    )
  );
  return (
    <ErrorBoundary fallback={<ErrorPage header="Global error" />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
