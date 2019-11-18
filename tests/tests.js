const { expect } = require('chai')
const { describe, it } = require('mocha')
const employee = require('./employee')
const products = require('./products')
const pricing = require('../pricing')

describe('pricing', () => {
  describe('formatPrice', () => {
    it('returns a price with two decimal places not rounded when given a number with multiple decimal places', () => {
      const formattedPrice = pricing.formatPrice(15.1566663)

      expect(formattedPrice).to.equal(15.15)
    })
  })
  describe('getEmployerContribution', () => {
    it('returns the amount  from long term disability plan contributed by employer in dollars', () => {
      const dollarAmount = 50
      const price = pricing.getEmployerContribution(products.longTermDisability.employerContribution, dollarAmount)
      expect(price).to.equal(10)
    })
  })


  describe('calculateVolLifePricePerRole', () => {
    it('returns the voluntary life price for a employee per their role', () => {
      const role = 'ee'
      const coverageLevel = [{ role: 'ee', coverage: 120000 }]

      const price = pricing.calculateVolLifePricePerRole(role, coverageLevel, products.voluntaryLife.costs)
      expect(price).to.equal(42)
    })
  })

  describe('calculateVolLifePrice', () => {
    it('returns the voluntary life price for a employee', () => {

      const selectedOptions = {
        familyMembersToCover: ['ee'],
        coverageLevel: [
          { role: 'ee', coverage: 200000 },
        ],
      }
      const price = pricing.calculateVolLifePrice(products.voluntaryLife, selectedOptions)
      expect(price).to.equal(70)
    })
  })

  describe('calculateLTDprice', () => {
    it('returns the price of an LTD plan without employer contribution factored in', () => {
      const selectedOptions = {
        familyMembersToCover: ['ee']
      }
      const price = pricing.calculateLTDPrice(products.longTermDisability, employee, selectedOptions)
      expect(price).to.equal(32.04)
    })
  })


  describe('calculateProductPrice', () => {
    it('returns the price for a voluntary life product for a single employee', () => {
      const selectedOptions = {
        familyMembersToCover: ['ee'],
        coverageLevel: [{ role: 'ee', coverage: 125000 }],
      }
      const price = pricing.calculateProductPrice(products.voluntaryLife, employee, selectedOptions)

      expect(price).to.equal(39.37)
    })

    it('returns the price for a voluntary life product for an employee with a spouse', () => {
      const selectedOptions = {
        familyMembersToCover: ['ee', 'sp'],
        coverageLevel: [
          { role: 'ee', coverage: 200000 },
          { role: 'sp', coverage: 75000 },
        ],
      }
      const price = pricing.calculateProductPrice(products.voluntaryLife, employee, selectedOptions)

      expect(price).to.equal(71.09)
    })

    it('returns the price for a disability product for an employee', () => {
      const selectedOptions = {
        familyMembersToCover: ['ee']
      }
      const price = pricing.calculateProductPrice(products.longTermDisability, employee, selectedOptions)

      expect(price).to.equal(22.04)
    })

    it('throws an error on unknown product type', () => {
      const unknownProduct = { type: 'vision' }

      expect(() => pricing.calculateProductPrice(unknownProduct, {}, {})).to.throw('Unknown product type: vision')
    })
  })

})