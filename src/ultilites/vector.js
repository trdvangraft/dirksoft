"use strict"

module.exports = class Vector {
	constructor(x, y, z) {
		this._x = x || 0;
		this._y = y || 0;
		this._z = z || 0;
	};

	get_x() { return this._x; }
	get_y() { return this._y; }
	get_z() { return this._z; }

	set_x(X) { this._x = X; }
	set_y(Y) { this._y = Y; }
	set_z(Z) { this._z = Z; }

	get_length() {
		return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2) + Math.pow(this._z, 2));
	}

	normalize() {
		let newX = this.get_x() / this.get_length();
		let newY = this.get_y() / this.get_length();
		let newZ = this.get_z() / this.get_length();
		this.set_x(newX);
		this.set_y(newY);
		this.set_z(newZ);
		return this;
	}

	static distance(a, b) {
		if (a != undefined && b != undefined) {
			return Math.sqrt(Math.pow((a._x - b._x), 2) +  Math.pow((a._y - b._y), 2) + Math.pow((a._z - b._z), 2));
		} 
		throw new TypeError("both vectors should be defined");
	}
}