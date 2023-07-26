import CurrentDate from './components/current-date';
import InputForm from './components/input-form';
import './App.css';

function App() {
  return (
    <main>
      <h1 className='title-message'>End of Day Calculator</h1>
      <CurrentDate />
      <InputForm />
    </main>
  );
}

export default App;
