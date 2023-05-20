import React from "react";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'Home'}>Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <ul>
            <li>
                <Link href="#">SignIn</Link>
            </li>
            <li>
                <Link href="#">Signout</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
