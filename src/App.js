import { Route, Switch } from 'react-router-dom'
import Landing from './Containers/Landing/Landing'
import Error404 from './Components/Error/Error404'
import About from './Containers/About/About'
import Careers from './Containers/Careers/Careers'
import FAQs from './Containers/FAQs/FAQs'
import ShoppingCart from './Containers/Shopping Cart/ShoppingCart'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import ScrollToTop from './Components/ScrollToTop/scrollToTop'
import ProductsPage from './Containers/Products/ProductsPage'
import Login from './Containers/Login/Login'
import Footer from './Components/Footer/Footer'
import CheckoutForm from './Containers/Checkout Form/CheckoutForm'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/about-us" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={CheckoutForm} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
