import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from 'store/authSlice';

const ProtectedRoute = ({children}) => {
    const {data} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfile())
    },[])
    if(!data || !data[0]) {
      return (
        <>No data Found.</>
      )
    }
  if(data[0].userRole == "admin") {
    return (
        <>{children}</>
    )
  }
  else {
    return (
        <>You are not admin</>
    )
  }
}

export default ProtectedRoute