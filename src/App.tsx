import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Navigator } from './routes';
import { useSelector, useDispatch, loginToken } from './store';


const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const tokenExpired = useSelector(state => (state.tokenExpired))


  useEffect(() => {
    if (tokenExpired && !(location.pathname === '/login' || location.pathname === '/signup')) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, tokenExpired]);

  useEffect(() => {
    dispatch(loginToken())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div id="page-wrapper">
      <Navigator />
    </div>
  );
};

export default App;
