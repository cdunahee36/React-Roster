import '../App.css';
import Welcome from './Welcome';
import {playerData} from './playerData';
import Playerlist from './Playerlist';

console.log('db', playerData)
function App() {
  return (
    <div className="container">
      <Welcome />
      <Playerlist players={playerData}/>
    </div>
  );
}

export default App;
