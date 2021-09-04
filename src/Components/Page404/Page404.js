import { useHistory } from 'react-router-dom';

export default function PageNotFound() {
  const history = useHistory();

  return (
    <div>
      <h1>404 Page not found</h1>
      {history.push('/')};
    </div>
  );
}
