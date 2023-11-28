import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <RoutesMain />
      <Footer />
    </>
  )
}

export default App
