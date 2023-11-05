import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.component';
import ErrorPage from './components/errorPage/ErrorPage.component';
import Body from './components/body/Body.component';

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage header="sdfsdf" />}>
      <Body />
    </ErrorBoundary>
  );
};

export default App;
