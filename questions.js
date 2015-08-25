var Questions = [
	"Country lawyer?",
	"Runner!"
];

var getQuestions = function(indexs) {

	if (typeof indexs === 'string')
		indexs = JSON.parse(indexs);
	var res = [];
	for (var i = 0, maxi = indexs.length; i < maxi; i++) {

		res.push(Questions[indexs[i] - 1]);
	}
	return res.join(' & ');
};

var fillAllChar = function(str) {


  str = str.toUpperCase();

  // For return 32 dig, if not, it will return 32 dig.
  str += '0';

  var arr = [], i, l, res = [];
  for (i = 0, l = str.length; i < l; i++) {
    arr.push(str.charCodeAt(i))
  }

  for (i = 0, l = arr.length - 1; i < l; i++) {
    var sum = arr[i] + arr[i + 1];
    sum %= 93;
    sum += 33;
    res.push(String.fromCharCode(sum));
  }

  return res.join('');
}
