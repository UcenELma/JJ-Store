// import React from 'react'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Signin from './components/Sign/Signin'
// import Signup from './components/Sign/Signup'
// import Landing from './Pages/Landing'
// import OverviewProduct from './components/Products/OverviewProduct'
// import Profil from './components/Navbar/Profil'
// import AllProducts from './components/Products/AllProducts'
// import { Navbar } from '@material-tailwind/react'
// import NavbarFix from './components/Navbar/NavbarFix'
// import Footer from './components/Footer/Footer'


// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/login' element={<Signin/>}/>
//           <Route path='/register' element={<Signup/>}/>

//           <Route path='/' element={<Navbar/>}/>
//           <Route path='/' element={<NavbarFix/>}/>

//           <Route path='/' element={<Landing/>}/>
//           <Route path='/products' element={<OverviewProduct/>}/>
//           <Route path='/allproducts' element={<AllProducts/>}/>

//           <Route path='/' element={<Footer/>}/>

//           <Route path='/profil' element={<Profil/>}/>

//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Sign/Signin';
import Signup from './components/Sign/Signup';
import Landing from './Pages/Landing';
import OverviewProduct from './components/Products/OverviewProduct';
import Profil from './components/Navbar/Profil';
import AllProducts from './components/Products/AllProducts';
import MainLayout from './components/Layout/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route 
          path="/" 
          element={
            <MainLayout>
              <Landing />
            </MainLayout>
          } 
        />
        <Route 
          path="/products" 
          element={
            <MainLayout>
              <OverviewProduct />
            </MainLayout>
          } 
        />
        <Route 
          path="/allproducts" 
          element={
            <MainLayout>
              <AllProducts />
            </MainLayout>
          } 
        />
        <Route 
          path="/profil" 
          element={
            <MainLayout>
              <Profil />
            </MainLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
