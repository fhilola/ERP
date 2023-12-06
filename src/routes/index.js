import {Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import Login from '../routes/login/Login'
import Register from '../routes/register/Register'
const Home = lazy(() => import("../pages/home/Home"))
const Private = lazy(()=>import('../helpers'))
const Admin = lazy(()=>import('../pages/admin/Admin'))
const Auth = lazy(()=>import('../pages/auth/Auth'))

const RouterController = () => {
    return (
        <Routes>
            <Route path='' element={
                <Suspense fallback={<p>Loading...</p>}>
                <Home/>
            </Suspense>
            }
            />
            <Route path='auth' element={
                <Suspense fallback={<p>Loading...</p>}>
                <Auth/>
            </Suspense>
            }
            >
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>
             <Route path='/admin' element={
                <Suspense fallback={<p>Loading...</p>}>
                <Private/>
            </Suspense>
            }
            >
                <Route path='' element={<Admin/>} />
            </Route>
        </Routes>
    )
}

export default RouterController