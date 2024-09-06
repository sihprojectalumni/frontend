import { useRef, useState } from "react";
import SignUpImage from "../assets/signup.png";
import Styles from "../styles/SignUp.module.css";

const SignUp = () => {
    const [alumni, setAlumni] = useState(true);
    const formRef = useRef(null);

    const changeAlumniStatus = () => {
            setAlumni(!alumni);
    }
    return (
        <div className={Styles.page}>
            <img className={Styles.image} src={SignUpImage} alt="Sign Up" />
            {!alumni ? <div className={Styles.form} ref={formRef}>
                <p className={Styles.appName}>Website Name</p>
                <input placeholder="Username" className={Styles.inputUsername} />
                <input placeholder="E-Mail" type="email" className={Styles.inputMail} />
                <input placeholder="Password" type="password" className={Styles.inputPassword} />
                <button className={Styles.signUpBtn}>Continue</button>
                <p className={Styles.or}>---------------------- OR ---------------------</p>
                <div style={{ display: "flex", marginTop: '20px' }}>
                    <div className={Styles.googleLogo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M23.5 12.7604C23.5 11.9479 23.4271 11.1666 23.2917 10.4166H12.5V14.8541H18.6667C18.3958 16.2812 17.5833 17.4895 16.3646 18.302V21.1875H20.0833C22.25 19.1875 23.5 16.25 23.5 12.7604Z" fill="#4285F4" />
                            <path d="M12.4997 23.9583C15.5934 23.9583 18.1872 22.9375 20.083 21.1875L16.3643 18.3021C15.3434 18.9896 14.0413 19.4062 12.4997 19.4062C9.52051 19.4062 6.98926 17.3958 6.08301 14.6875H2.27051V17.6458C4.15592 21.3854 8.02051 23.9583 12.4997 23.9583Z" fill="#34A853" />
                            <path d="M6.08366 14.6771C5.85449 13.9896 5.71908 13.2605 5.71908 12.5C5.71908 11.7396 5.85449 11.0105 6.08366 10.323V7.36462H2.27116C1.48991 8.90629 1.04199 10.6459 1.04199 12.5C1.04199 14.3542 1.48991 16.0938 2.27116 17.6355L5.23991 15.323L6.08366 14.6771Z" fill="#FBBC05" />
                            <path d="M12.4997 5.60413C14.1872 5.60413 15.6872 6.18746 16.8851 7.31246L20.1663 4.03121C18.1768 2.17704 15.5934 1.04163 12.4997 1.04163C8.02051 1.04163 4.15592 3.61454 2.27051 7.36454L6.08301 10.3229C6.98926 7.61454 9.52051 5.60413 12.4997 5.60413Z" fill="#EA4335" />
                        </svg>
                    </div>
                    <div className={Styles.continueWithGoogle}>Continue With Google&nbsp;</div>
                </div>
                <p className={Styles.alumniSignUp} onClick={changeAlumniStatus}>Sign up as An Alumni</p>
            </div>
            :
            <div className={Styles.form} ref={formRef}>
            <p className={Styles.appName}>Welcome Back Alumni</p>
            <input placeholder="Username" className={Styles.inputUsername} />
            <input placeholder="E-Mail" type="email" className={Styles.inputMail} id="mail"/>
            <input placeholder="Year of Graduation" type="number" className={Styles.inputMail} id="year"/>
            <input placeholder="Password" type="password" className={Styles.inputPassword} />
            <button className={Styles.signUpBtn}>Continue</button>
            <p className={Styles.or}>---------------------- OR ---------------------</p>
            <p className={Styles.alumniSignUp} onClick={changeAlumniStatus}>Sign Up as Student</p>
        </div>
        }
        </div>
    );
}

export default SignUp;