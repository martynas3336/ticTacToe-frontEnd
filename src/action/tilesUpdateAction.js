export default ({tiles,x,y}) => {
  let newTiles = [...tiles];

  if(newTiles[x][y] === 0) {
    let zeroValuesLen = tiles.filter(e => e === 0).length;
    if(zeroValuesLen % 2 === 0) newTiles[x][y] = 1;
    if(zeroValuesLen % 2 !== 0) newTiles[x][y] = 2;
  }

  return newTiles;
}
