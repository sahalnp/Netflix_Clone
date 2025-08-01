import React from 'react';
import { UserProvider } from './hooks/Context';
import { MainRouter } from './routers/MainRouter';


function App() {
  return (
    <UserProvider>
     <MainRouter />
    </UserProvider>
  );
}

export default App;
