import fondo from "./assets/fondo.png"


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
    <div style={bgImagen} className="overflow-hidden min-h-screen">
    </div>
    </>
  )
}

export default App
