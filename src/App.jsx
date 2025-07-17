import Dog1 from './assets/components/Dog1'
import Dog2 from './assets/components/dog2'
import Dog3 from './assets/components/Dog3'
import './App.css'

function App() {
  return (
    <>
      <h1 basename="apidog">APP</h1>
      <Dog3 />
      <hr />
      <Dog2 />
      <hr />
      <Dog1 />
    </>
  )
}

export default App