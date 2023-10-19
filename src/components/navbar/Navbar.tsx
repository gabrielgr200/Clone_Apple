import '../navbar/navbar.css'
import Logo from '../../img/logo.svg'
import Search from '../../img/search2.svg'
import Bag from '../../img/bag.svg'
import { useState } from 'react'

function Navbar() {
    const [paddingLeft] = useState(10)
    const [paddingRight] = useState(10)

    const [isburguerActive, setburguerActive] = useState(false);
    const [isNavListActive, setNavListActive] = useState(false);

    const handleburguerClick = () => {
    setburguerActive(!isburguerActive);
    setNavListActive(!isNavListActive);
  };

  return (
    <header className="header">
    <div className="header-container">

        {/* Nav PC */}

        <ul className="nav-list-pc">
            <li className="nav-item">
                <a href="/HomePage" className="nav-logo">
                <img src={Logo} style={{width: 20}}/></a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Loja</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Mac</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Ipad</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Iphone</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Watch</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">AirPods</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">TV e Casa</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Entretenimento</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Acessórios</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Suporte</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-search">
                <img src={Search} style={{width: 20}}/></a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-bag">
                <img src={Bag} style={{width: 20}}/></a>
            </li>
        </ul>


        {/* Nav Mobile */}

        <ul className="nav-mobile">
            <li className="nav-item" style={{paddingLeft: paddingLeft}}>
                <div className='nav-burguer'>
                  <div className={`burguer ${isburguerActive ? 'burguer-active' : ''}`} onClick={handleburguerClick}></div>
                </div>
            </li>
            <li className="nav-item" style={{zIndex: 999}}>
                <a href="/HomePage" className='nav-logo'>
                    <img src={Logo} className='logo' style={{width: 20}}/>
                </a>
            </li>
            <li className="nav-item" style={{paddingRight: paddingRight}}>
                <a href="#" className='nav-bag'>
                    <img src={Bag} style={{width: 20}}/>
                </a>
            </li>
        </ul>

        {/* Nav Items Mobile*/}

        <ul className={`nav-list-mobile ${isNavListActive ? 'active' : ''}`} onClick={handleburguerClick}>
            <li className="nav-item-mobile">
                <input type="text" className='search' placeholder='Search apple.com' />
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Mac</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Ipad</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Iphone</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Watch</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">AirPods</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">TV e Casa</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Entretenimento</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Acessórios</a>
            </li>
            <li className="nav-item-mobile">
                <a href="#" className="nav-link-mobile">Suporte</a>
            </li>
        </ul>
    </div>
   </header>
  )
}

export default Navbar