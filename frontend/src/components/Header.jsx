import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../contexts/AdminContext'

export default function Header() {
  const { admin } = useContext(AdminContext)
  return (
    <nav className="flex justify-between h-16 px-10 relative">
      <div className='flex place-items-center'>
        <img src="logo.png" alt="FrokerLogo" className='h-4/5'/>
      </div>
      <div className='flex place-items-center text-lg text-frk-orange font-semibold'>
        <ul className="flex gap-4">
          <li className='px-4 py-2'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4 py-2'>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className='px-4 py-2'>
            <Link to="/">Discover Froker</Link>
          </li>
          {!admin ? (
            <li className='px-4 py-2'>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li className='px-4 py-2'>
                <Link to="/create">+Add new Blog</Link>
              </li>
              <li className='px-4 py-2'>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
