export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="site-title">
        artists support network
    </a>
    <ul>
        <li className="home">
            <a href="/home">home</a>
        </li>
        <li>
            <a href="/painting">painting</a>
        </li>
        <li>
            <a href="/photography">photography</a>
        </li>
        <li>
            <a href="/movingimage">moving image</a>
        </li>
        <li>
            <a href="/digital">digital</a>
        </li>
    </ul>
  </nav>
}