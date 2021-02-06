import Player from './Player';

function Playerlist(props) {
  console.log('pl', props)
  const allPlayers = props.players.map(player => {
    return <Player 
    firstName={player.firstName}
    lastName={player.lastName}
    hobbies={player.hobbies}/>
  });
  console.log('pl', props)
  return <div>{allPlayers}</div>
}

export default Playerlist;