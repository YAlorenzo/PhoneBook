import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, } from "react-router-dom";
import { refreshUser } from "redux/auth/operations";
import { lazy, Suspense} from "react";
import { ThreeDots } from "react-loader-spinner";

const Home = lazy(() => import("../pages/Home"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const HeaderUserMenu = lazy(() => import("../pages/HeaderUserMenu")); 


export default function App() {  
  const isRefreshing = useSelector(state => state.auth.isRefreshing)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <Suspense fallback={
      <ThreeDots 
            height="100" 
            width="80" 
            radius="9"
            color="#2229ef" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />}>
      {!isRefreshing  ? (
      <div>
        <HeaderUserMenu/>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
    </div>
    )
      : (
        <div className="spiner">
          <ThreeDots 
            height="100" 
            width="80" 
            radius="9"
            color="#2229ef" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
         </div>
      ) }
    </Suspense>
    
    
  )
}
