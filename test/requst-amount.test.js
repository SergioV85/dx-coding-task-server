const chai = require('chai');
const LambdaTester = require('lambda-tester');
const requestAmountHandler = require('./../request-amount');

const {
  expect
} = chai;

describe('Request Amount Lambda', () => {
  describe('Succesfull path', () => {
    it('should return notes amount', () => LambdaTester(requestAmountHandler.handler)
      .event({
        queryStringParameters: {
          amount: 340
        }
      })
      .expectResult((result) => {
        const expectedResult = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            amount: [100, 100, 100, 20, 20]
          }),
        };
        expect(result).to.eql(expectedResult);
      }));
  });
  describe('Error path', () => {
    it('should return 406 error for incorrect amount', () => LambdaTester(requestAmountHandler.handler)
      .event({
        queryStringParameters: {
          amount: -100
        }
      })
      .expectResult((result) => {
        const expectedResult = {
          statusCode: 406,
          body: JSON.stringify({
            message: 'InvalidArgumentException'
          }),
        };
        expect(result).to.eql(expectedResult);
      }));
  });
  describe('Error path', () => {
    it('should return 500 error for not possible amount', () => LambdaTester(requestAmountHandler.handler)
      .event({
        queryStringParameters: {
          amount: 123
        }
      })
      .expectResult((result) => {
        const expectedResult = {
          statusCode: 500,
          body: JSON.stringify({
            message: 'NoteUnavailableException'
          }),
        };
        expect(result).to.eql(expectedResult);
      }));
  });
});
