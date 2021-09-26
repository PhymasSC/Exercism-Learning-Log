//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
	#rows;
	#columns;

	constructor(matrix) {
		this.matrix = matrix.split("\n");
	}

	get rows() {
		if (!this.#rows)
			this.#rows = this.matrix.map(row => row.split(" ").map(Number));
		return this.#rows;
	}

	get columns() {
		if (!this.#columns)
			this.#columns = this.rows[0].map((row, index) =>
				this.rows.map(row => row[index])
			);

		return this.#columns;
	}
}
