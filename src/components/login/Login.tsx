import { Link } from "react-router-dom"
import { LOGOUT } from "../../config/routes/path"

export const Login = () => {
  return (
    <>
    <div>Login</div>
    <Link to={LOGOUT}>logout</Link>
    </>
  )
}
