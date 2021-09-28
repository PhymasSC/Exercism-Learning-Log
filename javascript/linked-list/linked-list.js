//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
	list = new Array(10);
	tracer = -1;

	push(element) {
		this.list[++this.tracer] = element;
	}

	pop() {
		return this.list[this.tracer--];
	}

	shift() {
		let res = this.list[0];
		this.#realloc(false);
		return res;
	}

	unshift(element) {
		this.#realloc(true);
		this.list[0] = element;
	}

	#realloc(isAdd, terminatingIndex) {
		terminatingIndex = terminatingIndex || 0;
		if (isAdd) {
			for (let i = this.list.length; i > terminatingIndex; i--) {
				this.list[i] = this.list[i - 1];
			}
			this.tracer++;
		} else {
			for (let i = terminatingIndex; i < this.list.length - 1; i++) {
				this.list[i] = this.list[i + 1];
			}
			this.tracer--;
		}
	}

	delete(element) {
		let indexDeletionTakePlace = this.list.findIndex(el => el === element);
		if (indexDeletionTakePlace != -1)
			this.#realloc(false, indexDeletionTakePlace);
	}

	count() {
		return this.tracer + 1;
	}
}

