import './header.css'
import { Link } from 'react-router-dom'
export function Header () {
  const brandText = 'Elevate your vision'

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
        </ul>
      </nav>
      <p className='brand'>{brandText}</p>
    </header>
  )
}
