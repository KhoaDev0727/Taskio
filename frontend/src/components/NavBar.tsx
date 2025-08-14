import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav style={{padding: '12px 16px', borderBottom: '1px solid #eee'}}>
      <Link to="/projects">Projects</Link>
      <span style={{margin: '0 8px'}}>|</span>
      <Link to="/login">Logout</Link>
    </nav>
  )
}