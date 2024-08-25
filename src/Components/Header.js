import React from 'react'
import './ComponentAssest/Header.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function Header(props) {
  return (
      <div class="container " >
        <header class="d-flex justify-content-center py-2 fixed-top bg-dark" >
          <ul class="nav nav-pills" >
            <li class="nav-item">
              <Link to="#about" class="nav-link " >
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#experience" class="nav-link ">
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#education" class="nav-link ">
                Education
              </Link>
            </li>
            <li class="nav-item">
              <Link to="#contacts" class="nav-link ">
                Contacts
              </Link>
            </li>
          </ul>
        </header>
      </div>
  );
}


