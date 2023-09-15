"use client"
import React from 'react'
import '../styles/style.css'
import LoginPage from './components/modal/LoginPage'
import {  useSelector } from "react-redux";
export default function Main() {
  const count = useSelector((state: any) => state.login.value)
  return (
    <div>
      {count ? <LoginPage /> : ''}
    </div>
  )
}
