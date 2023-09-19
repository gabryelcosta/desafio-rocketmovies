import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { AuthRegister } from '../pages/AuthRegister'


export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path ="/authreg" element={<AuthRegister />} />
    </Routes>
  )
}