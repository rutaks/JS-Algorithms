//An algorithm to check if a given string, s,
//can be formed from two other strings, part1 and part2
//Only if the characters in part1 and part2 are in the same order as in s
// eg: 'codewars' is a merge from 'cdw' and 'oears':
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(str, p1, p2) {
	if (!str.length) return !p1.length && !p2.length;
	if (p1.length && str.charAt(0) == p1.charAt(0)) {
		if (p2.length && str.charAt(0) == p2.charAt(0)) {
			return isMerge(str.substr(1), p1.substr(1), p2) || isMerge(str.substr(1), p1, p2.substr(1));
		} else {
			return isMerge(str.substr(1), p1.substr(1), p2);
		}
	} else if (p2.length && str.charAt(0) == p2.charAt(0)) {
		return isMerge(str.substr(1), p1, p2.substr(1));
	} else {
		return false;
	}
}
