var buttons = document.getElementsByClassName("col");
var panel = document.getElementById("text-input");

var operators = {
	'+': function(a, b) { return a + b},
	'-': function(a, b) { return a - b},
	'/': function(a, b) { return a / b},
	'*': function(a, b) { return a * b},
	'.': function(a, b) { return parseFloat(a.toString() + "." + b.toString())}
};

var ops = false;
var op = "";
var opb = 0;
var previousEl = 0;

for (var it = 0; it < buttons.length; it++) {
	buttons[it].addEventListener("click", add);
}

var del = function () {
	ops = false;
	op = "";
	opb = 0;
	previousEl = 0;
	panel.value = "";
}

function add() {
	if(!(this.className.substring(4) === "delete")) {
		if (!ops) {
			previousEl = panel.value;

			if (!(this.className.substring(4) === "command")) {
				panel.value = previousEl + this.innerHTML;
			} else {
				ops = true;
				op = this.innerHTML.toString();

				panel.value = this.innerHTML;
			}
		} else {
			if (!(this.className.substring(4) === "command")) {
				panel.value = operators[op.toString()](parseFloat(previousEl), parseFloat(this.innerHTML));
				opb = previousEl;
			} else {
				panel.value = operators[op.toString()](parseFloat(previousEl), parseFloat(opb));

			}
			
			ops = false;
			op = "";
		}
	} else {
		del();
	}
}
