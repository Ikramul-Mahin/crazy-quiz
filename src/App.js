
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Statics from './components/Statics/Statics'
import Layouts from './components/Layouts/Layouts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'blog', element: <Blog></Blog> },
        { path: 'statics', element: <Statics></Statics> },
        { path: 'about', element: <About></About> }
      ]
    },


  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
