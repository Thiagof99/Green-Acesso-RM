import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import './App.css';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
