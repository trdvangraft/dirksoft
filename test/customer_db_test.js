const customer_handler = require("../src/database/customer_db.js");
const expect = require("chai").expect;
const should = require("chai").should();

describe("A customer is created", function() {
	describe("An empty customer is created whenever new is called", function() {
		beforeEach(function() {
			customer = new customer_handler();
		});

		it("Creates an empty customer", function() {
			expect(customer.get_ID()).to.equal(0);
			expect(customer.get_name()).to.equal("  ");
			should.equal(customer.get_telephone(), undefined);
			expect(customer.get_debit()).to.equal(0);
			expect(customer.get_credit()).to.equal(0);
			expect(customer.get_datapoints()).to.deep.equal([]);
		});

		describe("An attribute is able to be set using the correct set method", function() {
			it("The name of an customer can be set", function() {
				customer.set_name("Tijmen", "van", "Graft");
				expect(customer.get_name()).to.equal("Tijmen van Graft");
			});	

			it("The telephone number of an customer can be set", function() {
				customer.set_telephone(12345678);
				expect(customer.get_telephone()).to.equal(12345678);
			});

			it("The debit value can be set", function() {
				customer.set_debit(10);
				expect(customer.get_debit()).to.equal(10);
			});

			it("The credit value can be set", function() {
				customer.set_credit(10);
				expect(customer.get_credit()).to.equal(10);
			});
		});
	});

	describe("An customer is created with initial values and actions will change the customer", function() {
		beforeEach(function() {
			customer = new customer_handler("Tijmen", "van", "Graft", 12345678, 100, 200);
		});

		it("The value of the customer is the debit minus the credit value", function() {
			expect(customer.value()).to.equal(100);
		});

		it("The name should change accordinigly when the name is already set", function() {
			customer.set_name("Jeroen", "van", "Graft");
			expect(customer.get_name()).to.equal("Jeroen van Graft");
		});
	});
});