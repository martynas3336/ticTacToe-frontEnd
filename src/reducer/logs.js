const initialState = {
  list:[]
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'LOGS_UPDATE':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
