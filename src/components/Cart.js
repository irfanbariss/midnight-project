import { useEffect, useState } from 'react'
import '../styles/cart.scss'

const Cart = ({
  products,
  onProductRemove,
  onQuantityChange,
  onPurchase,
  onCartUpdate,
}) => {
  useEffect(() => {
    // Scroll to the top of the page when the component loads
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    onCartUpdate(products)
  }, [products])
  const [purchased, setPurchased] = useState(false)

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.count
  }, 0)
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-products">
          {purchased && (
            <h2 style={{ color: 'lightgreen', marginBottom: '2rem' }}>
              Tickets purchased
            </h2>
          )}
          {products.length === 0 ? (
            <span className="empty-cart" style={{ color: '#777' }}>
              Your cart is currently empty
            </span>
          ) : (
            products.map((product) => (
              <div className="cart-product" key={product.name}>
                <img src={product.url} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="product-price">
                    {product.price * product.count}$
                  </span>
                  <p>{product.type}</p>
                  <p>
                    {product.date}
                    {product.day}
                  </p>
                  <p>{product.venue}</p>
                </div>
                <select
                  className="count"
                  value={product.count}
                  onChange={(e) =>
                    onQuantityChange(product.name, e.target.value)
                  }
                >
                  {[...Array(10).keys()].map((number) => {
                    const num = number + 1
                    return (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    )
                  })}
                </select>
                <button
                  className="btn remove-btn"
                  onClick={() => onProductRemove(product)}
                >
                  X
                </button>
              </div>
            ))
          )}

          {products.length > 0 && (
            <>
              <p style={{ color: '#777' }}>Total: {totalPrice}$</p>
              <button
                className="btn purchase-btn"
                onClick={() => {
                  onPurchase()
                  setPurchased(true)
                }}
              >
                Purchase
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
