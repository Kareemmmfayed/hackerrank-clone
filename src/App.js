import Header from './components/Header'
import Home from './components/Home'
import Slides from './components/Slides'

function App() {

  document.body.style.zoom = '100%'

  return (
    <div className="App">
      <Header />
      <Home />
      <Slides />
    </div>
  );
}

export default App;
