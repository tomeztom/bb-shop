import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./ProductList.scss";

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = useSelector((state) => state.cart.totalQuantity);

    useEffect(() => {
        document.body.classList.add("productlist");
        return () => {
            document.body.classList.remove("productlist");
        };
    }, []);

    const plants = [
        {
            id: 1,
            name: "Monstera",
            price: 25,
            category: "Air Purifying Plants",
            image: "assets/plants/01-nasim-keshmiri-oViZwzA0qI0-unsplash.jpg",
        },
        {
            id: 2,
            name: "Spider Plant",
            price: 15,
            category: "Air Purifying Plants",
            image: "assets/plants/02-lucian-alexe-Si8rYoK5tf0-unsplash.jpg",
        },
        {
            id: 3,
            name: "Aloe Vera",
            price: 20,
            category: "Low Maintenance Plants",
            image: "assets/plants/03-feey-nU9U66FMutc-unsplash.jpg",
        },
        {
            id: 4,
            name: "Succulent",
            price: 10,
            category: "Low Maintenance Plants",
            image: "assets/plants/09-stephanie-harvey-T0inbt7nRME-unsplash.jpg",
        },
        {
            id: 5,
            name: "Fiddle Leaf Fig",
            price: 35,
            category: "Large Plants",
            image: "assets/plants/05-kira-laktionov-LfUpLeM2BSk-unsplash.jpg",
        },
        {
            id: 6,
            name: "Palm Tree",
            price: 45,
            category: "Large Plants",
            image: "assets/plants/06-feey-yyRsvDp-zNc-unsplash.jpg",
        },
        {
            id: 7,
            name: "Pothos",
            price: 12,
            category: "Air Purifying Plants",
            image: "assets/plants/07-feey-SHjvVN2x7f0-unsplash.jpg",
        },
        {
            id: 8,
            name: "Peace Lily",
            price: 30,
            category: "Air Purifying Plants",
            image: "assets/plants/08-feey-lmczPemWjQQ-unsplash.jpg",
        },
        {
            id: 9,
            name: "ZZ Plant",
            price: 18,
            category: "Low Maintenance Plants",
            image: "assets/plants/04-feey-1gwjE0c3PSQ-unsplash.jpg",
        },

        {
            id: 10,
            name: "Cactus",
            price: 15,
            category: "Low Maintenance Plants",
            image: "assets/plants/10-mathias-reding-WPZlpwJx0Lk-unsplash.jpg",
        },
        {
            id: 11,
            name: "Bird of Paradise",
            price: 55,
            category: "Large Plants",
            image: "assets/plants/11-david-brooke-martin-y-CtMkA57ps-unsplash.jpg",
        },
        {
            id: 12,
            name: "Dracaena",
            price: 40,
            category: "Large Plants",
            image: "assets/plants/12-feey-r-kG_nvpvLA-unsplash.jpg",
        },
        {
            id: 13,
            name: "English Ivy",
            price: 18,
            category: "Air Purifying Plants",
            image: "assets/plants/13-ksenia-bondarchuk-aha3X6YsJaI-unsplash.jpg",
        },
        {
            id: 14,
            name: "Golden Pothos",
            price: 20,
            category: "Air Purifying Plants",
            image: "assets/plants/14-adrian-ordonez-zJdBP20YODM-unsplash.jpg",
        },
        {
            id: 15,
            name: "Lavender",
            price: 18,
            category: "Low Maintenance Plants",
            image: "assets/plants/16-josephine-lityo-chyPcrDjcZg-unsplash.jpg",
        },
        {
            id: 16,
            name: "String of Pearls",
            price: 25,
            category: "Low Maintenance Plants",
            image: "assets/plants/15-jennifer-burk-tRU_e2bsFuI-unsplash.jpg",
        },
        {
            id: 17,
            name: "Bamboo Palm",
            price: 40,
            category: "Large Plants",
            image: "assets/plants/17-still-life-with-indoor-plants.jpg",
        },
        {
            id: 18,
            name: "Rubber Plant",
            price: 35,
            category: "Large Plants",
            image: "assets/plants/18-scott-webb-Mp38Mp9TJH8-unsplash.jpg",
        },
    ];

    const categories = [
        "Air Purifying Plants",
        "Low Maintenance Plants",
        "Large Plants",
    ];

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    return (
        <main>
            <section className="hero">
                <div className="hero__container">
                    <div className="hero__image">
                        <img src="assets/hero-image-2.webp" alt="Hero Banner" />
                    </div>
                    <div className="hero__item hero__item--title">
                        <h1 className="hero__title">Botanical Bliss Plants</h1>
                    </div>
                </div>
            </section>
            <section className="product-list">
                {categories.map((category) => (
                    <div key={category} className="product-list__category">
                        <h2>{category}</h2>
                        <div className="product-list__grid">
                            {plants
                                .filter((plant) => plant.category === category)
                                .map((plant) => (
                                    <Card
                                        key={plant.id}
                                        plant={plant}
                                        onAddToCart={() =>
                                            handleAddToCart(plant)
                                        }
                                        isInCart={cartItems.some(
                                            (item) => item.id === plant.id
                                        )}
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </section>
            {cartCount > 0 && (
                <div className="fixed-cart-button">
                    <Link to="/cart" className="btn btn-tertiary">
                        Go to Cart{" "}
                        <span className="btn-count">{cartCount}</span>
                    </Link>
                </div>
            )}
        </main>
    );
}

export default ProductList;
