import Routes from './routes.jsx'
import dotenv from 'dotenv';
import Registration from './components/Registration.jsx';

dotenv.config();

function App() {
  return (
    <div className="App">
     <Routes />
     <Registration/>
    </div>
  );
}

export default App;