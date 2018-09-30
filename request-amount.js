const calculateAmount = require('./modules/calculate-amount');

module.exports.handler = (event, context, callback) => {
  const requestedAmount = event.queryStringParameters.amount;

  try {
    const possibleAmounts = calculateAmount.calculatePossibleAmount(requestedAmount);

    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        amount: possibleAmounts,
      }),
    });
  } catch (err) {
    callback(null, {
      statusCode: err.code,
      body: JSON.stringify({ message: err.message })
    });
  }
};
