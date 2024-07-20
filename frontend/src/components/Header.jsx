import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdminContext } from '../../contexts/AdminContext'

export default function Header() {
  const { admin } = useContext(AdminContext)
  return (
    <nav className="flex justify-between">
      <div>Logo</div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/">Discover Froker</Link>
          </li>
          {!admin ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/create">+Add new Blog</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}
