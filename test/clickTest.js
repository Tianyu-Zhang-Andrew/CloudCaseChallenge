var form = require('../form.js');

calculateTax = form.calculateTax
calculateSuperAnnuation = form.calculateSuperAnnuation

const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe("Test the display of calculationResult span", () => {
  describe("Test calculationResult span dislay before and after clicking tax calculation span", () => {
    it("Result span should only show after tax calculation span is clicked", () => {
      JSDOM.fromFile('form.html').then((dom) => {
        global.document = dom.window.document
        let result = document.getElementById('calculationResult')
        expect(result).toBe(null);

        let taxCalculation = document.getElementById('taxCalculation')
        taxCalculation.click()

        result = document.getElementById('calculationResult')
        expect(result).toBeNull();
      })
    })
  })

  describe("Test calculationResult span dislay before and after clicking super annuation calculation span", () => {
    it("Result span should only show after super annuation calculation span is clicked", () => {
      JSDOM.fromFile('form.html').then((dom) => {
        global.document = dom.window.document
        let result = document.getElementById('calculationResult')
        expect(result).toBe(null);

        let superCalculation = document.getElementById('superCalculation')
        superCalculation.click()

        result = document.getElementById('calculationResult')
        expect(result).toBeNull();
      })
    })
  })
})

describe("Test missing input", () => {
  describe("Test clicking tax calculation span without input salary", () => {
    it("Should show give error message", () => {
      JSDOM.fromFile('form.html').then((dom) => {
        global.document = dom.window.document
        let taxCalculation = document.getElementById('taxCalculation')
        taxCalculation.click()

        let result = document.getElementById('calculationResult')

        expect(result).to.have.text("Please input your annual salary first")
      })
    })
  })

  describe("Test clicking Super annuation calculation span without input salary", () => {
    it("Should show give error message", () => {
      JSDOM.fromFile('form.html').then((dom) => {
        global.document = dom.window.document
        let superCalculation = document.getElementById('superCalculation')
        superCalculation.click()

        let result = document.getElementById('calculationResult')

        expect(result).to.have.text("Please input your annual salary first")
      })
    })
  })
})

describe("Test calculation with correct input test", () => {
  it("Should give tax/supper annuation information", () => {
    JSDOM.fromFile('form.html').then((dom) => {
      global.document = dom.window.document
      let input = document.getElementById('salaryInput')
      input.value = "37001"

      let taxCalculation = document.getElementById('taxCalculation')
      taxCalculation.click()

      let result = document.getElementById('calculationResult')
      expect(result).to.have.text("Your annual tax will be $" + calculateTax(37001))

      let superCalculation = document.getElementById('superCalculation')
      superCalculation.click()

      result = document.getElementById('calculationResult')
      expect(result).to.have.text("Your annual superannuation will be $" + calculateSuperAnnuation(37001))
    })
  })
})
