var paramTest = require("./index.js");

var options = {
  foo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  bar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

function tester(params)
{
  //score is negative distance to 25
  return -Math.abs(25 - params.foo * params.bar);
}

var results = paramTest(options, tester, 100000);

//sort descending by score
results.sort((a, b) => b.score - a.score);

//calculate averages by parameter:
var optionScores = {};

for(var option of Object.keys(options))
{
  optionScores[option] = {};
  for(var value of options[option])
  {
    var score = 0;
    var numScores = 0;

    for(var result of results)
    {
      if(option in result.params && result.params[option] == value)
      {
        score += result.score;
        numScores++;
      }
    }

    score /= numScores;
    optionScores[option][value] = score;
  }
}

console.log(results)
console.log(optionScores)
