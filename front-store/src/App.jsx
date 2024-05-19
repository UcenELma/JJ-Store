// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Category from './components/Category/Category'
// import TopProducts from './components/Products/topProducts'
// import AlaUne from './components/ALaUne/AlaUne'
// import NavbarFix from './components/Navbar/NavbarFix'
// import Footer from './components/Footer/Footer'
// import Signin from './components/Sign/Signin'
// import Signup from './components/Sign/Signup'

// const App = () => {
//   return (
//     <div>
//       <Signup/>
//       <Signin/>
//       <Navbar/>
//       <NavbarFix/>
//       <Hero/>
//       <Category/>
//       <TopProducts/>
//       <AlaUne/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './components/Sign/Signin'
import Signup from './components/Sign/Signup'
import Landing from './Pages/Landing'
import OverviewProduct from './components/Products/OverviewProduct'
import Profil from './components/Navbar/Profil'
// import ViewProduct from './components/Products/ViewProduct'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/products' element={<OverviewProduct/>}/>
          <Route path='/profil' element={<Profil/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App