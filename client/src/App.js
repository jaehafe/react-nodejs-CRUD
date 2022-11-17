import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './pages/Add';
import Books from './pages/Books';
import Update from './pages/Update';
import './style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Books />,
  },
  {
    path: '/add',
    element: <Add />,
  },
  {
    path: '/update/:id',
    element: <Update />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
