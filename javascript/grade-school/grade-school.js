//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
	#listing = {};

	roster() {
		return this.#listing;
	}

	add(student, grade) {
		let restStudent;
		if (this.#listing[grade]) {
			[...restStudent] = this.#listing[grade];
			restStudent.push(student);
		} else {
			restStudent = [student];
		}
		this.#listing[grade] = restStudent;
	}

	grade(grade) {
		if (!this.#listing[grade]) return [];
		return [...this.#listing[grade].sort()].sort();
	}
}
