import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  .logo {
    transform: translateY(-25%);
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    :nth-child(2) {
      --rotate: -2.5deg;
    }
    :nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    &:hover {
      color: var(--red);
    }
    /*&[aria-current='page'] {
      color: var(--red);
    }*/
  }
`;

const Nav = () => (
  <NavStyles>
    <ul className="grid gap-5 grid-cols-slick m-0 -mt-15 p-0 text-center list-none items-center">
      <li>
        <Link className="block no-underline text-3xl" to="/">
          Hot Now
        </Link>
      </li>
      <li>
        <Link className="block no-underline text-3xl" to="/pizzas">
          Pizza Menu
        </Link>
      </li>
      <li>
        <Link className="block no-underline text-3xl" to="/">
          <Logo />
        </Link>
      </li>
      <li>
        <Link className="block no-underline text-3xl" to="/slicemasters">
          SliceMasters
        </Link>
      </li>
      <li>
        <Link className="block no-underline text-3xl" to="/order">
          Order Ahead!
        </Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
