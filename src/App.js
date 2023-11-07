import EventPage from './components/EventPage'
import IEventPage from './components/IEventPage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './styles/navbar.scss'
// import './styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registeration from './components/Registeration'
import AllEvents from './pages/AllEvents'
import IIEventPage from './components/IIEventPage'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [purchased, setPurchased] = useState(false)
  const updateCart = (cartProducts) => {
    setCart(cartProducts)
  }
  const onPurchase = () => {
    // Handle the purchase action here, e.g., send a request to a server
    // After the purchase is successful, you can set the `purchased` state to true.
    setPurchased(true)
    setCart([]) // Clear the cart by setting it to an empty array
    console.log(purchased)
  }
  const addProductToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    )

    if (existingProductIndex !== -1) {
      // Product with the same name already exists, update its quantity
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += 1
      setCart(updatedCart)
    } else {
      // Product with a unique name, add it to the cart
      const newProduct = {
        ...product,
        quantity: 1,
      }
      setCart([...cart, newProduct])
      console.log(cart)
    }
  }
  const onProductRemove = (product) => {
    // Filter out the product to remove from the cart
    const updatedCart = cart.filter((item) => item.name !== product.name)
    setCart(updatedCart)
  }
  const onQuantityChange = (productName, newQuantity) => {
    // Find the product in the cart and update its quantity
    const updatedCart = cart.map((item) => {
      if (item.name === productName) {
        return {
          ...item,
          count: newQuantity,
        }
      }
      return item
    })

    setCart(updatedCart)
  }
  return (
    <>
      <Router>
        <Navbar cartItemCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/event/:name"
            element={<EventPage addProductToCart={addProductToCart} />}
          />
          <Route path="/account" element={<Registeration />} />
          <Route
            path="/hot-tickets/:name"
            element={<IEventPage addProductToCart={addProductToCart} />}
          />
          <Route
            path="/all-events/:name"
            element={<IIEventPage addProductToCart={addProductToCart} />}
          />
          <Route
            path="/all-events"
            element={<AllEvents addProductToCart={addProductToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                products={cart}
                onProductRemove={onProductRemove}
                onQuantityChange={onQuantityChange}
                onPurchase={onPurchase}
                onCartUpdate={updateCart}
              />
            }
          />
        </Routes>
      </Router>
      <div className="footer">
        <p>Developed by © Barış Özer. All Rights Reserved</p>
      </div>
    </>
  )
}

export default App
