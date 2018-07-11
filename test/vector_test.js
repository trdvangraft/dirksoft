const vector = require("../src/ultilites/vector.js");
const expect = require("chai").expect;

describe("A vector is created", function() {
	describe("An empty vector is created", function() {
		beforeEach(function() {
			myvector = new vector();
		})

		it("It should create an empty myvector at (0, 0, 0) when no arguments are given", function() {
			expect(myvector.get_x()).to.equal(0);
			expect(myvector.get_y()).to.equal(0);
			expect(myvector.get_z()).to.equal(0);
		});

		describe("The setter should work accordingly", function() {
			it("The X value can be set", function() {
				myvector.set_x(8);
				expect(myvector.get_x()).to.equal(8);
			})

			it("The Y value can be set", function() {
				myvector.set_y(20);
				expect(myvector.get_y()).to.equal(20);
			});

			it("The Z value can be set", function() {
				myvector.set_z(30);
				expect(myvector.get_z()).to.equal(30);
			})
		});
	});

	describe("A none empty myvector is created", function() {
		beforeEach(function() {
			myvector = new vector(1, 2, 3);
		});

		describe("The setter should work when we have initialized the object with values", function() {
			it("The X value can be set", function() {
				myvector.set_x(9);
				expect(myvector.get_x()).to.equal(9);
			})

			it("The Y value can be set", function() {
				myvector.set_y(21);
				expect(myvector.get_y()).to.equal(21);
			});

			it("The Z value can be set", function() {
				myvector.set_z(35);
				expect(myvector.get_z()).to.equal(35);
			})
		});

		describe("Arthmetic operations on the myvector work properly", function() {
			it("The length of the myvector should be given by pythogriam theorom", function() {
				expect(myvector.get_length()).to.equal(Math.sqrt(14));	
			});

			it("Normalizing a myvector will be performed inline and the length will be one", function() {
				result = new vector(1 / myvector.get_length(), 2 / myvector.get_length(), 3 / myvector.get_length());
				expect(myvector.normalize()).to.deep.equal(result);
				expect(myvector.get_length()).to.equal(1);
			});
		});
	});

	describe("Two none empty vectors are created to test arithmetic", function() {
		describe("The distance function should be tested with different inputs", function() {
			it("The distance between de 0 vector and and arb vector is given by pythogriam", function() {
				a = new vector(0, 0, 0);
				b = new vector(1, 2, 3);
				expect(vector.distance(a, b)).to.equal(Math.sqrt(14));
			});

			it("The distance between to arb vectors is given by pythogriam", function() {
				a = new vector(9, 5, 6);
				b = new vector(22, 7, 9);
				expect(vector.distance(a, b)).to.equal(Math.sqrt(182));
			});

			it("The distance between negative vector should also work properly with using the abs and pythogriam", function() {
				a = new vector(-9, -5, -6);
				b = new vector(22, 7, 9);
				expect(vector.distance(a, b)).to.equal(Math.sqrt(1330)); 
			});

			it("The distance between two 0 vectors should be zero", function() {
				a = new vector(0, 0, 0);
				b = new vector(0, 0, 0);
				expect(vector.distance(a, b)).to.equal(0);
			});

			it("The distance between two negative vectors should still work with absolute values", function() {
				a = new vector(-1, -2, -3);
				b = new vector(-4, -5, -6);
				expect(vector.distance(a, b)).to.equal(Math.sqrt(27));
			});

			it("Whenever one vector is undefined and we try to call distance than an expection should be thrown", function() {
				a = undefined;
				b = new vector(0, 0, 0);
				expect(() => vector.distance(a, b), "A is undefined so this should throw an error").to.throw(TypeError);
			});
		});
		
	});
})