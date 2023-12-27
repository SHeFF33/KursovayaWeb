import React from 'react';
import logovk from '../pictures/logovk.png'
import logotg from '../pictures/logotg.png'
import logowhats from '../pictures/logowhats.png'
import logogmail from '../pictures/logogmail.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-left">
      <p>Остались вопросы? Пишите нам и мы постараемся ответить</p>
    </div>
    <div className="footer-right">
      <a href="ссылка_на_вашу_страницу_в_соцсети_1" target="_blank" rel="noopener noreferrer"><img src={logovk} alt="Логотип VK" /></a>
      <a href="ссылка_на_вашу_страницу_в_соцсети_2" target="_blank" rel="noopener noreferrer"><img src={logotg} alt="Логотип Telegram" /></a>
      <a href="ссылка_на_вашу_страницу_в_соцсети_3" target="_blank" rel="noopener noreferrer"><img src={logowhats} alt="Логотип WhatsApp" /></a>
      <a href="ссылка_на_вашу_страницу_в_соцсети_4" target="_blank" rel="noopener noreferrer"><img src={logogmail} alt="Логотип Gmail" /></a>
    </div>
  </div>
  );
};

export default Footer;
