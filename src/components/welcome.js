function Welcome() {
  const currentHour = new Date().getHours()
  const message = currentHour < 5 ? "Why are you still up?" 
  : currentHour < 12 ? "Good Morning" 
  : currentHour < 18 ? "Good Afternoon" 
  : "Good Morning"

  return (
    <>
      <p> {message} Sports fans!</p>
      <h1>Welcome to Astros Baseball Spring Training</h1>
    </>
  )
}

export default Welcome;