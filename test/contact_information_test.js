
const contact_information = require("../src/ultilites/contact_information.js");
const expect = require("chai").expect;
const should = require("chai").should();

describe("Customer contact information should be created with an empty object", function() {
	beforeEach(function() {
		contact_wrapper = new contact_information();
	});

	describe("An empty object has been created", function() {
		it("Should create an empty object containings containers to store information", function() {
			expect(contact_wrapper.get_telephone_numbers()).to.deep.equal([]);
			expect(contact_wrapper.get_emails()).to.deep.equal([]);
			should.equal(contact_wrapper.get_billing_adress(), undefined);
			should.equal(contact_wrapper.get_private_email(), undefined);
			should.equal(contact_wrapper.get_private_telephone_number(), undefined);
		});
	});

	describe("Setter are tested", function() {
		it("When emails are being set the array should deep equal the setted emails", function() {
			emails = ["test@gmail.com", "blabla@hotmail.com", "atbgfsdafhj@yahoo.com"];
			contact_wrapper.set_emails(emails);
			var result = contact_wrapper.get_emails();
			expect(result).to.deep.equal(emails);
		});

		it("When numbers are being set the array should deep equal the setted numbers", function() {
			numbers = [1, 2, 3];
			contact_wrapper.set_telephone_numbers(numbers);
			expect(contact_wrapper.get_telephone_numbers()).to.deep.equal(numbers);
		});

		describe("When the private number is being set the number should be in the list of telephone numbers and should also be on the field", function() {
			it("The number is already in the list", function() {
				numbers = [1, 2, 3];
				contact_wrapper.set_telephone_numbers(numbers);
				contact_wrapper.set_private_number(2);
				expect(contact_wrapper.get_private_telephone_number()).to.equal(2);
				expect(contact_wrapper.get_telephone_numbers()).to.deep.equal(numbers);
			});

			it("The number was not avaliable", function() {
				numbers = [1, 3];
				contact_wrapper.set_telephone_numbers(numbers);
				numbers.push(2);
				contact_wrapper.set_private_number(2);
				expect(contact_wrapper.get_private_telephone_number()).to.equal(2);
				expect(contact_wrapper.get_telephone_numbers()).to.deep.equal(numbers);
			});

			it("An incorrect numbers is being set",  function() {
				numbers = [1, 3];
				contact_wrapper.set_telephone_numbers(numbers);
				contact_wrapper.set_private_number('a');
				should.equal(contact_wrapper.get_private_telephone_number(), undefined);
				expect(contact_wrapper.get_telephone_numbers()).to.deep.equal(numbers);
			});
		});

		describe("The private email adress is being set the email should be in the list of the emails and should also be on the field", function() {
			it("The email is already in the list", function() {
				emails = ["test@gmail.com", "blabla@hotmail.com", "atbgfsdafhj@yahoo.com"];
				contact_wrapper.set_emails(emails);
				contact_wrapper.set_private_email("atbgfsdafhj@yahoo.com");
				expect(contact_wrapper.get_private_email()).to.equal("atbgfsdafhj@yahoo.com");
				expect(contact_wrapper.get_emails()).to.deep.equal(emails);
			});

			it("The email is not in the list", function() {
				emails = ["test@gmail.com", "blabla@hotmail.com", "atbgfsdafhj@yahoo.com"];
				contact_wrapper.set_emails(emails);
				emails.push("tijmen@yahoo.com");
				contact_wrapper.set_private_email("tijmen@yahoo.com");
				expect(contact_wrapper.get_private_email()).to.equal("tijmen@yahoo.com");
				expect(contact_wrapper.get_emails()).to.deep.equal(emails);
			});
		});
	});
});