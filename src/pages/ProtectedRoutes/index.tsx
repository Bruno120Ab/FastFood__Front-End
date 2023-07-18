
/* eslint-disable react/jsx-no-useless-fragment */
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@BurguerToken:")
  return (
    <>
      {token ? <Outlet/> : <Navigate to='/' />}
    </>
  );

}

export default ProtectedRoutes;