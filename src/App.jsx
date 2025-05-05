import fondo from "./assets/fondo.png"
import { AppRouter } from "./routes/AppRouter"
import { UserPrivider } from "./auth/contexts/UserProvider"


function App() {

  const bgImagen ={
      backgroundImage: `url(${fondo})`,
      backgroundRepeat :"no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      position: "relative",

  }

  return (
    <>
    <UserPrivider>
    <AppRouter/>
    </UserPrivider>
    </>
  )
}

export default App
