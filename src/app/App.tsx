import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { PageError } from '@shared/ui';
import { AppRouter } from './AppRouter';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistedStore } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@shared/styles/main.css';

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={PageError}>
      <ReduxProvider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    </ErrorBoundary>
  );
};
