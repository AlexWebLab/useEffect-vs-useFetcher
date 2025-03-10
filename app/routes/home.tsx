import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/form/with-useEffect">Form with useEffect</Link>
        </li>
        <li>
          <Link to="/form/with-useFetcher">Form with useFetcher</Link>
        </li>
      </ul>
    </div>
  );
}
