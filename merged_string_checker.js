//An algorithm to check if a given string, s,
//can be formed from two other strings, part1 and part2
//Only if the characters in part1 and part2 are in the same order as in s
// eg: 'codewars' is a merge from 'cdw' and 'oears':
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
	if (!s.length) return !part1.length && !part2.length;
	if (part1.length && s.charAt(0) == part1.charAt(0)) {
		if (part2.length && s.charAt(0) == part2.charAt(0)) {
			return isMerge(s.substr(1), part1.substr(1), part2) || isMerge(s.substr(1), part1, part2.substr(1));
		} else {
			return isMerge(s.substr(1), part1.substr(1), part2);
		}
	} else if (part2.length && s.charAt(0) == part2.charAt(0)) {
		return isMerge(s.substr(1), part1, part2.substr(1));
	} else {
		return false;
	}
}
