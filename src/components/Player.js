function Player(props) {
  console.log('player props', props)

  const hobbyList = props.hobbies.map(hobby => {
    return <li>{hobby}</li>
  })

  const hobbies = props.hobbies.length < 1 ? "None Listed" : hobbyList

  return <div>
    <h3>{props.firstName}  {props.lastName}</h3>
    <ul><li>{hobbies}</li></ul>
  </div>
  
}

export default Player;