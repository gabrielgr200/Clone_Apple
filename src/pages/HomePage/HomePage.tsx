import Iphone from '../../img/achei.jpeg'
import SE from '../../img/relogio.png'
import Mac from '../../img/mac.png'
import Icon from '../../img/maça.png'
import Logo from '../../img/black.png'
import Neutral from '../../img/neutral.png'
import Carbon from '../../img/sim.png'
import Clock from '../../img/ultra.png'
import TV from '../../img/ipad.png'
import M2 from '../../img/m2.png'
import "../HomePage/home.css"
import Navbar from "../../components/navbar/Navbar"


function HomePage() {
  return (
    <>
    <Navbar/>
    <section className="iphone">
      <div className="container-iphone">
        <div className="container-title-iphone">
          <h1>iPhone 15 Pro</h1>
          <p className='title'>Titânio. Muito robusto. Muito leve. Muito Pro</p>
          <p className='subtitle'>Pré-venda a partir de 27/09</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Ver preços</a>
          </p>
        </div>
        <div className="container-img-iphone">
          <img src={Iphone}  />
        </div>
      </div>
    </section>

    <section className='iphone15'>
      <div className="container-iphone15">
        <h1>iPhone15</h1>
        <p className='title'>A câmera é uau. O design é seu uau. É todo uau.</p>
        <p className='subtitle'>Pré-venda a partir de 27/09</p>
        <p>
          <a href="#" className='link'>Saiba mais</a>
          <a href="#" className='link'>Ver preços</a>
        </p>
      </div>
    </section>

    <section className="produts">
      <div className="watch">
        <div className="container-title-watch">
          <img src={Icon} className='icon'/>
          <h1>Watch</h1>
          <p className='title'>series 9</p>
          <p className='text'>Brilha mais em tudo</p>
          <p className='subtitle'>Confira em breve a disponibilidade</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Ver preços</a>
          </p>
        </div>
      </div>
    </section>

    <section className='cards'>
      <div className="card">
        <div className="container-title-card">
          <img src={Logo} className='black'/>
          <h1>Watch</h1>
          <p className='title'>Ultra 2</p>
          <p className='text'>Sua próxima aventura</p>
          <p className='subtitle'>Confira em breve a disponibilidade</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Ver preços</a>
          </p>
        </div>
        <img src={Clock} className='clock'/>
      </div>
      <div className="carbon">
        <div className="container-title-carbon">
          <img src={Neutral} className='neutral' />
          <h1>Carbon Neutral</h1>
          <p className='text'>Uma novidade<br />
            no Apple Watch. <br />
            E na Apple</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Assistir ao vídeo</a>
          </p>
        </div>
        <img src={Carbon} className='carbono'/>
      </div>
      </section>

      <section className='watchse'>
      <div className="SE">
        <div className="container-title-se">
          <img src={Logo} className='logo1'/>
          <h1>Watch</h1>
          <p className='title'>SE</p>
          <p className='text'>Para amar cada segundo.</p>
          <p className='subtitle'>Disponível a partir de 22/09</p>
          <p> 
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Reservar</a>
          </p>
        </div>
        <img src={SE} className='snoopy'/>
      </div>
      <div className="mac">
        <div className="container-title-mac">
          <h1>MacBook Air<br />
            de 15 polegadas.</h1>
          <p className="text">Espaçoso sem perder a fineza.</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Comprar</a>
          </p>
        </div>
        <img src={Mac} className='carbono'/>
      </div>
    </section>

    <section className="tvplus">
      <div className="tv">
        <div className="container-title-tv">
          <h1>iPad Pro</h1>
          <p className='title'>Com potência do <img src={M2} className='m2'/></p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Comprar</a>
          </p>
        </div>
        <img src={TV} className='plus'/>
      </div>
      <div className="airpods">
        <div className="container-title-pods">
          <h1>AirPods Pro</h1>
          <p className='title'>Áudio Adaptativo. Ouça a diferença.</p>
          <p className='subtitle'>Confira em breve a disponibilidade.</p>
          <p>
            <a href="#" className='link'>Saiba mais</a>
            <a href="#" className='link'>Comprar</a>
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomePage