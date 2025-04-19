import './App.css'
import InterestCalculator from './components/InterestCalculator'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Interest Calculator</h1>
      </header>
      <main>
        <InterestCalculator />
      </main>
      <footer className="app-footer">
        <p>Calculate simple interest with custom tiers and time periods</p>
      </footer>
    </div>
  )
}

export default App
