
import React from 'react'
import {useNavigate} from "react-router-dom";

export default function Home() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
