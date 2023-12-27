import './Description.css';

const Description = () => {
  return (
    <>
      <div>
        <div className="inform">
          <div className="inform-title">Уважаемые водители!</div>
          <div className="inform-item">
            <h2>
              Мы рады приветствовать вас на сайте истинных автолюбителей. Здесь
              вы найдете актуальную информацию о мире автомобилей, а также
              широкий выбор товаров, связанных с автомобильной тематикой. Мы
              ценим ваш интерес к нашему сайту и готовы предоставить вам
              полезную и интересную информацию. Будьте внимательны и осторожны
              на дорогах, следите за новостями и продуктами, которые могут
              облегчить вашу автомобильную жизнь.
            </h2>
          </div>
          <div className="inform-item">
            <h2>С наилучшими пожеланиями,</h2>
          </div>
          <div className="inform-item">
            <h2>Блог Автолюбителя.</h2>
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src="https://storage.myseldon.com/news-pict-af/AF3AD9FB3F27D1C58BD0653F2C54EEC7"
              alt="Image 1"
              className="image-border"
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://bronk.club/uploads/posts/2023-03/1677784863_bronk-club-p-otkritki-voditelyu-khoroshei-dorogi-pinter-63.jpg"
              alt="Image 2"
              className="image-border"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;