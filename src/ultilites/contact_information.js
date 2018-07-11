'use strict';

class Contact_information {
	constructor(telephone_numbers, emails, billing_adress, private_email, private_telephone_number) {
		this._telephone_numbers = telephone_numbers || [];
		this._emails = emails || [];
		this._billing_adress = billing_adress;
		this._private_email = private_email;
		this._private_telephone_number = private_telephone_number;
	}

	get_telephone_numbers() { return this._telephone_numbers; }
	get_emails() { return this._emails; }
	get_billing_adress() { return this._billing_adress; }
	get_private_email() { return this._private_email; }
	get_private_telephone_number() { return this._private_telephone_number; }

	set_telephone_numbers(telephone_numbers) { this._telephone_numbers = telephone_numbers; }
	set_emails(emails) { this._emails = emails; }
	set_billing_adress(billing_adress) { this._billing_adress = billing_adress; }

	set_private_email(private_email) { 
		if(!this.get_emails().includes(private_email)) {
			this.get_emails().push(private_email);
		}
		this._private_email = private_email;
	} 

	set_private_number(private_telephone_number) {
		if(!this.get_telephone_numbers().includes(private_telephone_number)) {
			this.get_telephone_numbers().push(private_telephone_number);
		} 
		this._private_telephone_number = private_telephone_number;
	}
}

module.exports = Contact_information;