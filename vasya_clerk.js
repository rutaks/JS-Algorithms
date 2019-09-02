// An algorithm to check if a ticket clerk selling 25$ tickets will
// have change for people buying tickets by paying 25, 50 or 100 dollar respectively

function tickets(peopleInLine) {
	var bills = [ 0, 0, 0 ];
	for (var i = 0; i < peopleInLine.length; i++) {
		switch (peopleInLine[i]) {
			case 25:
				bills[0]++;
				break;
			case 50:
				bills[0]--;
				bills[1]++;
				break;
			case 100:
				bills[1] ? bills[1]-- : (bills[0] -= 2);
				bills[0]--;
				break;
		}
		if (bills[0] < 0) return 'NO';
	}
	return 'YES';
}
