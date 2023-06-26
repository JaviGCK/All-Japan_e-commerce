import './Navbar.css';

export const Navbar = () => {
  let navbarHeadings = ["New in/", "Most Popular/", "All Products/", "Tea/", "Vegetables/", "Noodles/", "Wish List/"];

  return (
    <>
      <section className="section-navbar">
        {navbarHeadings.map((heading, index) => (
          <h2 className="section-navbar-heading" key={index} id={`section-${index}`}>
            {heading}
          </h2>
        ))}
      </section>
    </>
  );
};
