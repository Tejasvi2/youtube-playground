import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from './components/Watch';
import SearchResult from './components/SearchResult';
import MainContainer from './components/MainContainer';

function App() {

   const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
      index: true,
      element:  <MainContainer />
      },
       {
      path: '/watch',
      element: <Watch />
    },
    {
      path: '/results',
      element: <SearchResult />
    }  
    ]
  }
 ])
  
  return (
    <Provider store={appStore}>
       <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
