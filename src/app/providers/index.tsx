import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { PageError } from '@shared/ui';
import { RouterProvider } from './RouterProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@shared/styles/main.css';

export const AppProviders = () => {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
