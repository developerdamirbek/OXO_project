import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout"
import { Login } from "./pages/login"
import { Auth } from "./pages/auth/auth"
import { Register } from "./pages/register"
import { useScrollToTop } from "./hooks/useScrollToTop"
import { Profile } from "./pages/profile"
import { Liked } from "./pages/liked"
import { Messages } from "./pages/messages"
import { Announce } from "./pages/announce/announce"
import { useNavigate } from "react-router-dom"
import { Home } from "./pages/home"
import { UserAnnounce } from "./pages/profile/pages/user-announce/user-announce"
import { UserMessages } from "./pages/profile/pages/user-messages/user-messages"
import { UserPayment } from "./pages/profile/pages/user-payment"
import { Settings } from "./pages/profile/pages/settings"
import { Promocode } from "./pages/profile/pages/promocode"
import { SingleCategory } from "./pages/single-category/single-category"
import { ProductDetails } from "./pages/product-details/product-details"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const navigate = useNavigate()

    if(window.location.pathname === '/auth'){
        navigate("/auth/login")
    }
    

  useScrollToTop()

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home/>}/>
          <Route path='auth' element={<Auth />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/profile" element={<Profile/>} >
            <Route index element={<UserAnnounce/>}/>
            <Route path="messages" element={<UserMessages/>}/>
            <Route path="payment" element={<UserPayment/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="promocode" element={<Promocode/>}/>
          </Route>
          <Route path="liked" element={<Liked/>} />
          <Route path="messages" element={<Messages/>} />
          <Route path="announce" element={<Announce/>} />
          <Route path="category/:datakey" element={<SingleCategory/>} />
          <Route path="products/:datakey/:id" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
