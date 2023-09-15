"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setState } from '@/redux/reducers/loginReduc';
export default function RightPanel() {
  const count = useSelector((state:any) => state.login.value)
  const dispatch = useDispatch();
  console.log(count);
  const handleOpen = () => {
    dispatch(setState());
  };

  return (
    <div>
      <button className='btn-cc' onClick={handleOpen}>Kirish</button>
      <button className='btn-gr'>Ro`yhatdan o`tish</button>
    </div>
  )
}
