import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from 'store/authSlice';

const ProtectedRoute = ({children}) => {
    const {profile} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProfile())
    },[])
  if(profile.userRole == "admin") {
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