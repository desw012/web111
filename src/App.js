import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

import Home from "./pages/Home";
import OffCanvas from "./pages/bootstrap/OffCanvas";

import { Provider } from 'react-redux'

//ecommerce
import ItemList from "./pages/ecommerce/ItemList";
import CartList from "./pages/ecommerce/CartList";
import {store} from "./store/config";

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>

                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>} />

                        <Route path="/ecommerce/item_list" element={<ItemList/>} />
                        <Route path="/ecommerce/cart_list" element={<CartList/>} />

                        <Route path="/bootstrap/offcanvas" element={<OffCanvas/>} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
  );
}

export default App;
