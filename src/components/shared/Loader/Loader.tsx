import { InfinitySpin } from "react-loader-spinner";
import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={style.box}>
      <InfinitySpin
        width="200"
        color='#ef9a13'
      />
    </div>
  )
};

export default Loader;