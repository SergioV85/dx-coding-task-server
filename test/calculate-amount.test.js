const chai = require('chai');
const calculateAmount = require('./../modules/calculate-amount');

const { expect } = chai;

describe('Calculate Amount', () => {
  describe('Empty values', () => {
    it('should return empty array for null', () => {
      expect(calculateAmount.calculatePossibleAmount(null)).to.eql([]);
    });
    it('should return empty array for empty value', () => {
      expect(calculateAmount.calculatePossibleAmount('')).to.eql([]);
    });
    it('should return empty array for0', () => {
      expect(calculateAmount.calculatePossibleAmount(0)).to.eql([]);
    });
  });
  describe('InvalidArgumentException', () => {
    it('should return error for negative values', () => {
      try {
        calculateAmount.calculatePossibleAmount(-300);
      } catch (err) {
        expect(err).to.eql({ code: 406, message: 'InvalidArgumentException' });
      }
    });
    it('should return error for letters values', () => {
      try {
        calculateAmount.calculatePossibleAmount('abc');
      } catch (err) {
        expect(err).to.eql({ code: 406, message: 'InvalidArgumentException' });
      }
    });
    it('should return error for non-number values', () => {
      try {
        calculateAmount.calculatePossibleAmount('1.2.0');
      } catch (err) {
        expect(err).to.eql({ code: 406, message: 'InvalidArgumentException' });
      }
    });
  });
  describe('NoteUnavailableException', () => {
    it('should return error for values with not available amount', () => {
      try {
        calculateAmount.calculatePossibleAmount(123);
      } catch (err) {
        expect(err).to.eql({ code: 500, message: 'NoteUnavailableException' });
      }
    });
  });
  describe('Possible sets', () => {
    it('should return [100, 100, 100] for 300', () => {
      expect(calculateAmount.calculatePossibleAmount(300)).to.eql([100, 100, 100]);
    });
    it('should return [20, 10] for 30', () => {
      expect(calculateAmount.calculatePossibleAmount(30)).to.eql([20, 10]);
    });
    it('should return [100, 100, 50, 20, 10] for 280', () => {
      expect(calculateAmount.calculatePossibleAmount(280)).to.eql([100, 100, 50, 20, 10]);
    });
    it('should return [100, 50, 20, 20] for 190', () => {
      expect(calculateAmount.calculatePossibleAmount(190)).to.eql([100, 50, 20, 20]);
    });
  });
});
