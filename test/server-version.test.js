const chai = require('chai');
const serverVersionHandler = require('./../server-version');

const { expect } = chai;

describe('Server Version Lambda', () => {
  it('should return server version', () => {
    serverVersionHandler.handler((err, result) => {
      expect(result).to.eql('1.0.0');
    });
  });
});
