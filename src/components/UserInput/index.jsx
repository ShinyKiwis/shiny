import UserInputStyle from "./UserInput.module.css"

const UserInput = ({ type, placeholder, renderIcon = false, Icon}) => {
  return (
    <div className={UserInputStyle.user_input_container}>
      <input type={type} placeholder={placeholder}/>
      {renderIcon && <Icon size="1.2em" />}
    </div>
  )
}

export default UserInput
