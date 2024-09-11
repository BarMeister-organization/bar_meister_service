import { Link } from 'react-router-dom';
import style from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.content}>
        <p className={style.text}>Barmeister</p>
        <h1 className={style.title}>Cocktails. Discovered.</h1>
        <p className={style.text}>Search our cocktail database, create lists and fill up your virtual bar to discover amazing cocktails you can make right now</p>
      </div>
      <button type='button' className={style.button}>
        Search now
      </button>
      <div className={style.cocktail}>
        <div>
          <Link to={'/recipe'} className={style.link}>
            <div className={style.cocktailPhoto}></div>
            <div className={style.info}>
              <h2 className={style.name}>How to Create the Perfect Mai Tai: A Step-by-Step Guide</h2>
              <p className={style.descr}>There's nothing like a well-made Mai Tai to whisk you away to a tropical paradise, no matter where you are. With its delicious blend of rum, citrus, and a hint of almond, the Mai Tai has become a favorite for those looking to capture the spirit of tiki culture in a glass.</p>
            </div>
            <div className={style.iconBox}>
              <svg className={style.icon}>
                <use href="img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;