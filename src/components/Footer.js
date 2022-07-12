function Footer(props) {
    const {totalMoney, onClickClearCart} = props;

    const handleClickClearCart = () => {
        onClickClearCart();
    }
   
    return (
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${totalMoney}</span>
                </h4>
            </div>
            <button className="btn clear-btn" onClick={handleClickClearCart}>
                clear cart
            </button>
        </footer>
    );
}

export default Footer;
