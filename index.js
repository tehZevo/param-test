function choice(r)
{
  return r[Math.floor(Math.random() * r.length)];
}

function chooseParams(options)
{
  var params = {};

  Object.entries(options).forEach(([k, r]) => params[k] = choice(r));

  return params;
}

function paramTest(paramOptions, testFunc, count=1)
{
  var results = [];

  for(var i = 0; i < count; i++)
  {
    var params = chooseParams(paramOptions);
    var score = testFunc(params);
    results.push({params, score});
  }

  return results;
}

module.exports = paramTest;
