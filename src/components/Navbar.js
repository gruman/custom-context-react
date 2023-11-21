import { useCustomContext } from "../state/context"
import { Link } from 'react-router-dom';
export default function Navbar() {
  const { score, siteData } = useCustomContext();

  return (
    <>
      <header>
        <h1><Link to="/">{siteData.name}</Link></h1>
        <h1><Link to="/another">Another page</Link></h1>
        <p className="points">Score: {score ? score : 0}</p>
      </header>
    </>
  )
}