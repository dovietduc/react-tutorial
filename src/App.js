import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CartList from './components/CartList';

import { useState } from 'react';
import cartList from './service/cart';

function App() {
    const [carts, setCarts] = useState(cartList);

    function getTotalCart() {
        // get cart total
        let cartTotal = 0;
        for (let i = 0; i < carts.length; i++) {
            cartTotal = cartTotal + carts[i].amount;
        }
        return cartTotal;
    }

    function getTotalMoney() {
        let totalMoney = 0;
        for (let i = 0; i < carts.length; i++) {
            totalMoney = totalMoney + carts[i].amount * carts[i].price;
        }
        return totalMoney;
    }

    const removeCartItem = (id) => {
        const cartsNewState = carts.filter((cartItem) => cartItem.id != id);
        setCarts(cartsNewState);
    };

    const handleCickIncrement = (cart) => {
        const index = carts.findIndex(
            (cartElement) => cartElement.id == cart.id
        );
        const cartsNewState = [...carts];
        cartsNewState[index] = { ...cart };
        cartsNewState[index].amount++;
        setCarts(cartsNewState);
    };

    const handleCickDecrement = (cart) => {
        
		if(cart.amount > 0) {
			const index = carts.findIndex(
				(cartElement) => cartElement.id == cart.id
			);
			const cartsNewState = [...carts];
			cartsNewState[index] = { ...cart };
			cartsNewState[index].amount--;
			setCarts(cartsNewState);

			// check carts empty
			const cartsFilterExclode = carts.filter(cartElement => cartElement.amount != 0);
			if(cartsFilterExclode.length == 1 && cart.amount == 1) {
				setCarts([]);
			}
		}

        
    };

    const handleClickClearCart = () => {
        const cartsNewState = [];
        setCarts(cartsNewState);
    };

    if (carts.length == 0) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is current Empty</h4>
                </header>
            </section>
        );
    }

    return (
        <main>
            <NavBar cartTotal={getTotalCart()} />


            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                </header>
                {/* cart items */}

                <CartList
                    onClickHandleIncrement={handleCickIncrement}
                    onClickRemoveItem={removeCartItem}
                    onClickHandleDecrement={handleCickDecrement}
                    carts={carts}
                />

                {/* cart footer */}
                <Footer
					carts={carts}
                    totalMoney={getTotalMoney()}
                    onClickClearCart={handleClickClearCart}
                />
            </section>
        </main>
    );
}

export default App;
