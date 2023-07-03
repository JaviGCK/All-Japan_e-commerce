import './App.css'
import { RoutesPath } from './config/routes/RoutesPath.routes'

export function App(props:any) {

  return (
    <>
      <RoutesPath {...props} />
    </>
  )
}

