import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/logo.png';
import { IoMdMenu } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble, FaYoutube } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation(); // Use useLocation instead of useHistory

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenu(false);
    // Scroll to the top of the page when navigating to a new location
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    { id: 'about', label: 'ABOUT', link: '/about' },
    { id: 'portfolio', label: 'PORTFOLIO', link: '/portfolio' },
    { id: 'services', label: 'SERVICES', link: '/services' },
    { id: 'contact', label: 'CONTACT', link: '/contact' },
  ];

  const triggerMobileNavItem = (target) => {
    setMobileMenu(false);
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };




  return (
    <>
     <nav className={`fixed top-0 w-full border-b border-b-gray-700 z-50 transition duration-300 ${hasScrolled ? 'bg-[#100028]' : ''} ${hasScrolled && window.scrollY > 10 ? 'top-0 shadow-xl' : ''}`}>
      <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
        <div className="xl:py-4 py-6 mx-auto flex items-center justify-between xl:justify-start">
          <div>
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="hidden xl:flex items-center space-x-24 ml-auto">
            <ul className="flex items-center space-x-3 mx-auto"> {/* Centering the ul */}
              {navItems.map((item) => (
                <li key={item.id} className="p-5 mx-1 border-transparent relative group cursor-pointer">
                  <NavLink
                    to={item.link}
                    onClick={() => setMobileMenu(false)} // Close mobile menu when navigating
                    className={`text-white hover:text-[#00bfe7]`}
                    activeClassName="text-[#00bfe7] underline" // Apply green text color and underline when link is active
                    style={{ color: location.pathname === item.link ? '#00bfe7' : '' }} // Apply green text color when link is active
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#00bfe7] ${
                        location.pathname === item.link ? 'scale-x-100' : 'scale-x-0'
                      } transition-transform origin-bottom-left`}
                    ></span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className='text-lg ml-auto'> {/* Aligning icons to the end */}
              <span className='flex space-x-2 md:space-x-5 items-center'>
                <FaFacebook className='text-white cursor-pointer hover:text-[#00bfe7]' />
                <FaTwitter className='text-white cursor-pointer hover:text-[#00bfe7]' />
                <FaDribbble className='text-white cursor-pointer hover:text-[#00bfe7]' />
                <FaInstagram className='text-white cursor-pointer hover:text-[#00bfe7]' />
                <FaYoutube className='text-white cursor-pointer hover:text-[#00bfe7]' />
              </span>
            </div> 
          </div>

          <div className="block xl:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-[#00bfe7]" />
                ) : (
                  <IoMdMenu className="text-4xl text-[#00bfe7]" />
                )}
              </button>
            </div>
        </div>
      </div>
      </nav>

      

      {/* Mobile Menu */}
      {mobileMenu && (
          <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <div className="absolute right-0 min-h-screen w-3/5 py-4 px-8 shadow md:w-1/3 bg-[#100028] z-50">
             <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
               <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
             </button>
            <ul className="mt-8 flex flex-col space-y-7">
              {navItems.map((item) => (
                <li key={item.id} className="py-2">
                  <NavLink
                    to={item.link}
                    className="cursor-pointer pt-0.5  uppercase text-white"
                    activeClassName="font-semibold"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
        )}
    </>
  );
};

const MobileNavItem = ({ children, onClick }) => {
  return (
    <li className="py-2">
      <span onClick={onClick} className="cursor-pointer pt-0.5  uppercase text-white">
        {children}
      </span>
    </li>
  );
};

export default Navbar;