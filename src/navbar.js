import './navbar.css';
import React from 'react';

function Navbar() {
    return (
      <div>
        <nav>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a class="dropdown" href="@">UNIVERSITIES</a>
                <div class="dropdown-content">
                  <ul><a href="@">Texas Campus</a></ul>
                  <ul><a href="@">New York Campus</a></ul>
                  <ul><a href="@">Florida Campus</a></ul>
                </div>
              </li>
              <li><a class="dropdown" href="@">PROFESSORS</a>
                <div class="dropdown-content">
                  <ul><a href="@">Majors</a></ul>
                  <ul><a href="@">Programs</a></ul>
                  <ul><a href="@">Classes</a></ul>
                </div>
                </li>
                <li><a class="dropdown" href="@">STUDENTS</a>
                <div class="dropdown-content">
                  <ul><a href="@">Majors</a></ul>
                  <ul><a href="@">Programs</a></ul>
                  <ul><a href="@">Classes</a></ul>
                </div>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default Navbar;