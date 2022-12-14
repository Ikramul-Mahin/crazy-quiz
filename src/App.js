
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Statics from './components/Statics/Statics'
import Layouts from './components/Layouts/Layouts';
import Quizes from './components/Quizes/Quizes'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layouts></Layouts>,
      children: [
        // { path: '/', element: <Home></Home> },
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home/:homeId',
          loader: async ({ params }) => {
            console.log(params)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
          },
          element: <Quizes></Quizes>
        },
        { path: 'blog', element: <Blog></Blog> },
        { path: 'statics', element: <Statics></Statics> },
        { path: 'contact', element: <About></About> },
        {
          path: '*',
          element:
            <div className='mt-36 mb-40'>
              <h1 className='text-4xl font-extrabold'>404 Not Found!!</h1>
            </div>
        }
      ]
    }


  ])
  return (

    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
