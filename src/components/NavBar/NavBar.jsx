import logo from '../../img/logo.png'
import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className="brand">
            <img src={logo} width={100} alt=""/>
        </div>

        <ul className='list-menu'>
            <li>Dibujos a color</li>
            <li>Dibujos a blanco y negro</li>
            <li>Dibujos a escala de grises</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar