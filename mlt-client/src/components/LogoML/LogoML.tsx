import logo from "../../assets/Logo_ML.png";
import logo2x from "../../assets/Logo_ML@2x.png";

import styles from "./LogoML.module.scss";

const IMAGE_WIDTH = 53;
const IMAGE_HEIGTH = 36;

const LogoML = (props: { className: string }): JSX.Element => {
  const { className } = props;
  return (
    <div className={className ? className : ""}>
      <figure className={styles.logoML}>
        <img
          src={logo}
          alt="Mercado Libre"
          srcSet={`${logo} 1x, ${logo2x} 2x`}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGTH}
        />
      </figure>
    </div>
  );
};

export default LogoML;
