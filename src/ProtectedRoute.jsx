import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from 'store/authSlice';

const ProtectedRoute = ({children}) => {
    const {profile} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfile())
    },[])

  if(profile.userRole === "admin") {
    return (
        <>{children} </>
    )
  }
  else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-4">Access Denied!</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">You are not admin</p>
      </div>
    </div>
    )
  }
}

export default ProtectedRoute