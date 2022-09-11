import React from 'react';
import '~/App.css';
import { AppProvider } from '~/providers';
import { AppRoutes } from '~/routes';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
