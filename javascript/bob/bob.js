//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const HAS_YELL_POSSIBILITY = /[A-Z]/;
const YELL_EXPRESSION = /^[^a-z]+$/g;
const YELL_WITH_QUESITON_EXPRESSION = /^[^(a-z?)]+\?$/g;
const NO_EXPRESSION = /^$|^[\s]+$/g;

export const hey = message => {
	if (message.match(NO_EXPRESSION)) return "Fine. Be that way!";

	if (message.match(HAS_YELL_POSSIBILITY)) {
		if (message.match(YELL_WITH_QUESITON_EXPRESSION))
			return "Calm down, I know what I'm doing!";

		if (message.match(YELL_EXPRESSION)) return "Whoa, chill out!";
	}
	if (message.trim().charAt(message.trim().length - 1) === "?") return "Sure.";

	return "Whatever.";
};
