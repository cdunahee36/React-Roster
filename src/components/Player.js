function Player(props) {
  console.log('player props', props)
  
  const hobbies = props.hobbies.map(hobby => {
    return <li>{hobby}</li>
    })

  return <div><h3>{props.firstName}  {props.lastName}</h3>
  <ul>{hobbies}</ul>
  </div>
  
}

export default Player;