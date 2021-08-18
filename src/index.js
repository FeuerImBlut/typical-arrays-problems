
exports.min = function min (array) {
	if (!Array.isArray(array) || !array.length) {
		return 0;
	}
  array.sort(function(a,b) {
	return a - b;  
  }); 
  return array[0];
}

exports.max = function max (array) {
		if (!Array.isArray(array) || !array.length) {
		return 0;
	}
  array.sort(function(a,b) {
	return b - a;  
  }); 
  return array[0];
}

exports.avg = function avg (array) {
		if (!Array.isArray(array) || !array.length) {
		return 0;
	}
	var sum = 0;
	array.forEach(element => sum = sum + element);
	
  return sum / array.length;
}
