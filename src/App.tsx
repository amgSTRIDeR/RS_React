import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.component';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Body from './components/body/Body.component';
import ErrorPage from './components/errorPage/ErrorPage.component';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Body />} />
        <Route
          path="error"
          element={<ErrorPage header="(Some error on the page)" />}
        />
        <Route path="*" element={<ErrorPage header="(404 not found)" />} />
      </Route>
    )
  );
  return (
    <ErrorBoundary fallback={<ErrorPage header="sdfsdf" />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
