import fondo from "./assets/fondo.png"
import { AppRouter } from "./routes/AppRouter"


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
    <AppRouter/>
    </>
  )
}

export default App
