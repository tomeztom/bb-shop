import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import About from "./Components/About";
import ProductList from "./Components/ProductList";
import CartPage from "./Components/CartPage";

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;