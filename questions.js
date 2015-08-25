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