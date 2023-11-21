import Bio from './components/Bio/Bio'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import './App.css'

function App() {
  return (
    <body>
      <Header/>
      <main>
        <Bio/>
        <Portfolio/>
      </main>
      <Footer/>
    </body>
  )
}

export default App
