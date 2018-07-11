"use strict"

const vector = require("../ultilites/vector.js");

module.exports = class Customer {
	// default constructor to allow us to create an object even if we dont know anything.
	constructor(firstname, middlename, lastname, telephone_number, debit, credit, datapoints) {
		this._ID = 0;
		this.set_name(firstname || "", middlename || "", lastname || "");
		this.set_telephone(telephone_number);
		this.set_debit(debit || 0);
		this.set_credit(credit || 0);
		this.set_datapoints(datapoints || []);
	}

	get_ID() { 	return this._ID; }
	get_name() { return this._firstname + " " + this._middlename + " "  + this._lastname; }
	get_telephone() { return this._telephone_number; }
	get_debit() { return this._debit; }
	get_credit() { return this._credit; }
	get_datapoints() { return this._datapoints; } 

	set_name(firstname, middlename, lastname) { this._firstname = firstname; this._middlename = middlename; this._lastname = lastname; }
	set_telephone(telephone_number) { this._telephone_number = telephone_number; }
	set_debit(debit) { this._debit = debit; }
	set_credit(credit) { this._credit = credit; }
	set_datapoints(datapoints) { this._datapoints = datapoints; }

	// will return the value of the customer regarding their credit and debit value
	value() { return this._credit - this._debit; }

	// this functions will add a datapoints to the datapoints array
	add_datapoint(vector_point) {
		if (vector_point instanceof vector) {
			this.get_datapoints().push(vector_point);
		} else {
			throw new TypeError("Was no vectorpoint");
		}
	}

};

