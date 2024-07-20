import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import BlogsList from './components/BlogsList'
import Main from './components/Main.jsx'
import Login from './features/Login.jsx'
import Logout from './features/Logout.jsx'
import CreateBlog from './features/CreateBlog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        element: <Main />,
        children: [
          { index: true, element: <BlogsList /> },
          { path: 'blogs', element: <BlogsList /> },
          { path: 'login', element: <Login /> },
          { path: 'logout', element: <Logout /> },
          { path: 'create', element: <CreateBlog /> },
        ],
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}