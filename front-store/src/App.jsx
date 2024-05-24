
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './components/Sign/Signin'
import { Provider, useSelector } from 'react-redux'

import Signup from './components/Sign/Signup'
import Landing from './Pages/Landing'
import OverviewProduct from './components/Products/OverviewProduct'
import Profil from './components/Navbar/Profil'

import CartSidebar from './components/CartSidebar'

// import ViewProduct from './components/Products/ViewProduct'


const App = () => {
  const isCartOpen = useSelector((state => state.cart.isCartOpen))
  return (
   



      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/products' element={<OverviewProduct/>}/>
          <Route path='/profil' element={<Profil/>}/>
       
        </Routes>
        {isCartOpen && <div ><CartSidebar/> </div>}
      </BrowserRouter>


   
  )
}
export default App