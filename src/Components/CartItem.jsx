import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../cartSlice";
import "./CartItem.scss";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleIncrement = () => {
        dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
    };

    const handleDecrement = () => {
        if (item.quantity > 1) {
            dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
        }
    };

    const subtotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="cart-item">
            <div className="cart-item__image-wrapper">
                <img
                    className="cart-item__image"
                    src={item.image}
                    alt={item.name}
                />
            </div>
            <div className="cart-item__details">
                <div className="cart-item__infos">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
                <div className="cart-item__tools">
                    <div className="cart-item__quantity">
                        <button onClick={handleDecrement} disabled={item.quantity <= 1}>
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button className="btn-remove" onClick={handleRemove}>
                        Remove
                    </button>
                </div>
                <p>Subtotal: ${subtotal}</p>
            </div>
        </div>
    );
}

export default CartItem;
