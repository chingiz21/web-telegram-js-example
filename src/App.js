import './App.css';
import Root from './routes/Root';
import About from './routes/About';
import Shop from './routes/Shop';
import Events from './routes/Events';
import MainContainer from './container/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useTelegram } from './helpers/useTelegram';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer>
      <Root />
    </MainContainer>,
  },
  {
    path: "/about",
    element: <MainContainer>
      <About />
    </MainContainer>,
  },
  {
    path: "/shop",
    element: <MainContainer>
      <Shop />
    </MainContainer>,
  },
  {
    path: "/events",
    element: <MainContainer>
      <Events />
    </MainContainer>,
  },
]);




function App() {

  const { tg } = useTelegram();

  console.log(tg);

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
