module.exports.handler = (event, context, callback) => (
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      version: '1.0.0',
    }),
  })
);
