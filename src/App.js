import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className='linha'>
        <Card title='Card 1' Red>X</Card>
        <Card title='Card 2' Blue>Y</Card>
      </div>
      
      <div className='linha'>
        <Card title='Card 3' Purple>X</Card>
        <Card title='Card 4' Green>Y</Card>
      </div>
      
      
    </div>
  );
}

export default App;
