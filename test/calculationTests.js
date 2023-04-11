var form = require('../form.js');

calculateTax = form.calculateTax
calculateSuperAnnuation = form.calculateSuperAnnuation

var assert = require('assert');

describe("Test tax calculation", () => {
    describe('Test tax calculation 1',function(){
        it('No tax for income under 18200',function(){
            assert.strictEqual(calculateTax(18000), 0);
            assert.strictEqual(calculateTax(18200), 0);
        })
    })

    describe('Test tax calculation 2',function(){
        it('Calculate tax for income bewteen 18201 and 37000',function(){
            assert.strictEqual(calculateTax(18201), 0.19);
            assert.strictEqual(calculateTax(37000), 3572);
        })
    })

    describe('Test tax calculation 3',function(){
        it('Calculate tax for income bewteen 37000 and 90000',function(){
            assert.strictEqual(calculateTax(37001), 3572.325);
            assert.strictEqual(calculateTax(90000), 20797);
        })
    })

    describe('Test tax calculation 4',function(){
        it('Calculate tax for income bewteen 90000 and 180000',function(){
            assert.strictEqual(calculateTax(90001), 20797.37);
            assert.strictEqual(calculateTax(180000), 54097);
        })
    })

    describe('Test tax calculation 5',function(){
        it('Calculate tax for income greater 180000',function(){
            assert.strictEqual(calculateTax(180001), 54097.45);
        })
    })
})

describe("Test SuperAnnuation calculation", () => {
    it('Calculate SuperAnnuation for income = 100000',function(){
        assert.strictEqual(calculateSuperAnnuation(100000), 10500);
        assert.strictEqual(calculateSuperAnnuation(5000), 525);
    })
})
