import './App.css';
import { Bar, Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 20, 3, 5, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

function App() {
  return (
    <div>
      <header className='App'>
        <h1 className='title'>Pie Chart</h1>
      </header>
      <Pie data={data} />
    </div>
  );
}

export default App;
