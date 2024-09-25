class Temperature {
	constructor(measure) {
		this.measure = measure;
	}
	convertToF() {
		return (this.measure * 9) / 5 + 32;
	}
	convertToKevin() {
		return this.measure + 273.15;
	}
}

let temp = new Temperature(25);
console.log(temp.convertToF()); // 77
console.log(temp.convertToKevin()); // 298.15
