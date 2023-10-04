import { Routex } from "./Routes"
import { HelmetProvider } from "react-helmet-async"

const App = () => {
  return (
    <HelmetProvider>
      <Routex />
    </HelmetProvider>
  )
}

export default App