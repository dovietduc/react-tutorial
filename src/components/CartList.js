import CartItem from './CartItem';

function CartList(props) {

    const {
        carts, 
        onClickRemoveItem,
        onClickHandleIncrement,
        onClickHandleDecrement,
        onClickClearCart
    } = props;

    return (
        <div>
            {
                carts.map((cartItem) => {
                    if(cartItem.amount > 0) {
                        return (
                            <CartItem 
                                onClickHandleIncrement={onClickHandleIncrement}
                                onClickHandleDecrement={onClickHandleDecrement}
                                onClickRemoveItem={onClickRemoveItem} 
                                onClickClearCart={onClickClearCart}
                                key={cartItem.id} cart={cartItem}
                            />
                        )    
                    }
                })
            }
        </div>
    );
}

export default CartList;
