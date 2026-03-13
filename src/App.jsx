import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import {routes} from './routes/Routes';

function App() {

  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
}

export default App;
