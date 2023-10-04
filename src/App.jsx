import { Routex } from "./Routes"
import ReactPixel from 'react-facebook-pixel'

const pixel = new ReactPixel({
  pixelId: "858411422659360",
  options: {
    autoConfig: true,
  },
});

const App = () => {
  return (
    <ReactPixel pixel={858411422659360}>
      <Routex />
      ReactPixel.pageView();
    </ReactPixel>
  )
}

export default App