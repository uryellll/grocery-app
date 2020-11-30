import classes from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import Landing from './Containers/Landing/Landing'
import Error404 from './Components/Error/Error404'
import Products from './Containers/Products/Products'
import About from './Containers/About/About'
import Careers from './Containers/Careers/Careers'
import FAQs from './Containers/FAQs/FAQs'
import ShoppingCart from './Containers/Shopping Cart/ShoppingCart'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/products" component={Products} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/about-us" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/faqs" component={FAQs} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App
