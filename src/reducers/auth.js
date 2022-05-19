export const defaultState = {
  userData: {},
  accessToken: '',
  init_Data: {},
};
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'STORE_USER':
      let data = action.payload;
      return Object.assign({}, state, {
        userData: data,
      });

    case 'LOGOUT':
      return Object.assign({}, state, {
        userData: {},
        accessToken: '',
      });
    case 'ACCESS_TOKEN':
      let token = action.payload;
      return Object.assign({}, state, {
        accessToken: token,
      });

    case 'ADD_INIT':
      let initData = action.payload;
      console.log('redux..', initData);
      return Object.assign({}, state, {
        init_Data: initData,
      });

    default:
      return state;
  }
}
