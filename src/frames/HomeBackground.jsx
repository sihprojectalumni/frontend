// HomeBackground.js
import Styles from '../styles/Homebackground.module.css';

const HomeBackground = ({ children }) => {
    return (
        <div className={Styles.page}>
            <div className={Styles.background}>
                <div className={Styles.circle1}></div>
                <div className={Styles.circle2}></div>
                <div className={Styles.circle3}></div>
                <div className={Styles.circle4}></div>
                <div className={Styles.circle5}></div>
                <div className={Styles.circle6}></div>
            </div>
            <div className={Styles.content}>
                {children}
            </div>
        </div>
    );
}

export default HomeBackground;