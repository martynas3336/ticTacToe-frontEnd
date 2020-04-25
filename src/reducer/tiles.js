const initialState = {
  id:null,
  grid: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ]
}

export default (state=initialState, action) => {
  switch(action.type) {
    case 'TILES_UPDATE':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}
