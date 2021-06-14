// actions
import * as IdentityApi from '../network/apis';

const handleError = (error) => console.log(error);

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: 'LOGGED_IN' });
  };
}
