let res = document.getElementById ("result")
let reusult = 0;
let com = true
let num = 0
let symbol = "plus"
let last = ""

function Clear(){
	reusult = 0;
	num = 0;
	symbol = "plus"
	last = ""
	res.innerHTML = "0"
	com = true;
}

function Del(){
	if (last == "") return
	if (last >= "0" && last <= "9"){
		num -= (num % 10)
		num /= 10
		if (num < 1) num = 0
		res.innerHTML = num;
	}else{
		return
	}
}

function cal (){
	if (symbol == "div"){
		reusult /= num;
	}
	if (symbol == "mul"){
		reusult *= num;
	}
	if (symbol == "minus"){
		reusult -= num;
	}
	if (symbol == "plus"){
		reusult += num;
	}
}

function Div(){
	if (last >= "0" && last <= "9"){
		cal();
		num = 0;
	}
	symbol = "div"
	last = "div"
	res.innerHTML = "0"
}

function mul(){
	if (last >= "0" && last <= "9"){
		cal();
		num = 0;
	}
	symbol = "mul"
	last = "mul"
	res.innerHTML = "0"
}

function minus(){
	if (last >= "0" && last <= "9"){
		cal();
		num = 0;
	}
	symbol = "minus"
	last = "minus"
	res.innerHTML = "0"
}

function plus(){
	if (last >= "0" && last <= "9"){
		cal();
		num = 0;
	}
	symbol = "plus"
	last = "plus"
	res.innerHTML = "0"
}

function zero(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 0;
	
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "0"
	else
		res.innerHTML = "0"
	last = "0"
}

function one(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 1;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "1"
	else
		res.innerHTML = "1"
	last = "1"
}

function two(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 2;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "2"
	else
		res.innerHTML = "2"
	last = "2"
}

function three(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 3;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "3"
	else
		res.innerHTML = "3"
	last = "3"
}

function four(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 4;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "4"
	else
		res.innerHTML = "4"
	last = "4"
}

function five(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 5;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "5"
	else
		res.innerHTML = "5"
	last = "5"
}

function six(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 6;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "6"
	else
		res.innerHTML = "6"
	last = "6"
}

function seven(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 7;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "7"
	else
		res.innerHTML = "7"
	last = "7"
}

function eight(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 8;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "8"
	else
		res.innerHTML = "8"
	last = "8"
}

function nine(){
	if (last == "equal"){
		reusult = 0;
		symbol = "plus"
		last = ""
		cal()
	}
	num *= 10;
	num += 9;
	if (last != "" && last >= "0" && last <= "9" && res.innerHTML != "0")
		res.innerHTML += "9"
	else
		res.innerHTML = "9"
	last = "9"
}	

function equal(){
	if (last == "equal") return
	cal ()
	res.innerHTML = reusult	 
	num = 0;
	last = "equal"
}