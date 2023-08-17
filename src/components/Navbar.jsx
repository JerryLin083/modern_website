import { useState } from 'react'
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex w-full py-6 navbar justify-between items-center'>
      <img 
        className='w-[124px] h-[32px] cursor-pointer' 
        src={logo} alt='hoobank' 
        onClick={() => scrollY(0,0)}  
      />

      <ul className='list-none hidden justify-end items-center flex-1 sm:flex gap-10'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppings cursor-pointer text-[16px] text-white font-semibold hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle(prev => !prev)}
        />
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="flex flex-col gap-4">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppings font-normal cursor-pointer text-[16px] text-white text-semibold hover:text-secondary`}
              >
                <a 
                  href={`#${nav.id}`}
                  onClick={() => setToggle(prev => !prev)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar