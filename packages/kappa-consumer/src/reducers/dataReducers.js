const initialState = {
  registrationData: [],
  sourceTableData: [],
  recordGroups: {},
  destinationDetails: {},
  schedules: [],
  qcData: {},
  productListData: [],
};

export function authReducer(state = {
  authenticated: false,
}, action) {
  switch (action.type) {
    case 'LOGGING_IN':
      return { ...state };
    case 'LOGGED_IN':
      return {
        ...state,
        authenticated: true,
      };
    default:
      return state;
  }
}
