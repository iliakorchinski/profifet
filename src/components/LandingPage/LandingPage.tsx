import { useEffect, useState } from 'react';
import './LandingPage.styles.css';
import { PRODUCTSDATA } from './LandingPage.consts';

const sections = ['about', 'products', 'contacts', 'certificates'];

interface Product {
  image: string;
  title: string;
  country: string;
}
export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent, id: string) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // закрыть меню после выбора
    };

    sections.forEach((id) => {
      const link = document.getElementById(`nav-${id}`);
      link?.addEventListener('click', (e) =>
        handleNavClick(e as MouseEvent, id)
      );
    });

    return () => {
      sections.forEach((id) => {
        const link = document.getElementById(`nav-${id}`);
        link?.removeEventListener('click', (e) =>
          handleNavClick(e as MouseEvent, id)
        );
      });
    };
  }, []);

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">PROFIFET</div>

        <div
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#" id="nav-about">
            О нас
          </a>
          <a href="#" id="nav-products">
            Продукция
          </a>
          <a href="#" id="nav-certificates">
            Сертификаты
          </a>
          <a href="#" id="nav-contacts">
            Контакты
          </a>
        </nav>
      </header>
      <section id="about" className="section about">
        <h2>О компании</h2>
        <p>
          PROFIFET — компания с дополнительной ответственностью,
          специализирующаяся на поставках подсолнечного шрота высокого качества.
          Мы гордимся нашим профессионализмом, надежностью и вниманием к
          клиенту.
        </p>
      </section>

      <section id="products" className="section products">
        <h2>Наша продукция</h2>
        <div className="product-grid">
          {' '}
          {PRODUCTSDATA.map((item: Product) => (
            <div key={item.title} className="product-card">
              <div className="product-image">
                <img src={item.image} />
              </div>
              <h3>{item.title}</h3>
              <p>Производство: {item.country}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certificates" className="section certificates">
        <h2>Сертификаты</h2>
        <div className="cert-placeholder">
          Все сертификаты предоставляются при отгрузке товара
        </div>
      </section>

      <section id="contacts" className="section contacts">
        <h2>Контакты</h2>
        <p>Minsk, Republic of Belarus</p>
        <p>Тел.: +375 (29) 676 23 25</p>
        <p>Email: profifet.minsk@gmail.com</p>
      </section>

      <footer className="footer">
        © PROFIFET, {new Date().getFullYear()}. Все права защищены.
      </footer>
    </div>
  );
}
