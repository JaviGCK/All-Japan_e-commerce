import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  let navbarHeadings = ["New in/", "Most Popular/", "All Products/", "Tea/", "Vegetables/", "Noodles/", "Wish List/"];


  const initialState = "New in/"
  const [currentFilter, setCurrentFilter] = useState(initialState)


  

  const handleNavbar = (filter: string) => {
    setCurrentFilter(filter)
  }


  return (
    <>
      <section className="section-navbar">
        {navbarHeadings.map((heading, index) => (
          <button className="section-navbar-heading" onClick={() => handleNavbar(heading)} name={currentFilter} key={index} id={`section-${index}`}>
            {heading}
          </button>
        ))}
      </section>
    </>
  );
};
