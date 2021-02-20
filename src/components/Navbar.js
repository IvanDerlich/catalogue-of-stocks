import { Link } from 'react-router-dom'

function NavBar(){
  return (
    <div>      
      <div><Link to="/">Home</Link></div>
      <div><Link to='/About'>About</Link></div>
    </div>
  )
}
export default NavBar