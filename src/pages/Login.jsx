import LoginStyle from "../styles/Login.module.css"
import {WiStars} from "react-icons/wi"
import {FaUser, FaKey} from "react-icons/fa"
import UserInput from "../components/UserInput"
import Button from "../components/Button"

const LoginSection = () => {
  return (
    <div className={LoginStyle.user_area}>
      <span className={LoginStyle.user_prompt}>
        <WiStars size="1.5em"/>
        Welcome back
      </span>
      <UserInput type="text" placeholder="username" renderIcon={true} Icon={FaUser}/>
      <UserInput type="password" placeholder="password" renderIcon={true} Icon={FaKey}/>
      <div className={LoginStyle.user_actions}>
        <span>oops, forget your password ?</span>
        <div className={LoginStyle.user_buttons}>
          <Button text="Login" isPrimary={true}/>
          <Button text="Register" isPrimary={false}/>
        </div>
      </div>
    </div>
  )
}

const Login = () => {

  return (
    <div className={LoginStyle.container}>
      <LoginSection />
      <img src="koi.svg" alt="koi icon rotating"/>
    </div>
  )
}

export default Login
