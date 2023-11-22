var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// Old Way
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54


// New Way
const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54
// Also we can use object attributes as variables




// Example 2
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  const tempOfTomorrow = undefined;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79