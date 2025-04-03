//your JS code here. If required.
function daysOfAYear(year) {
	if(year%100 === 0){
		if(year%400 === 0){
			//leap yr
			return 366;
		}
		else{
			//not a leap yr
			return 365;
		}
	}
	else{
		if(year%4 === 0){
			//leap yr
			return 366;
		}
		else{
			return 365;
		}
	}
	
	
}
// dd
let year = prompt("Enter year")
// daysOfAYear(year)
alert(daysOfAYear(year))