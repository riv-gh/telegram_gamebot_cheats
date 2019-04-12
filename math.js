//copy-past this in browser console when game started
var x_el = document.getElementById('task_x');
var op_el = document.getElementById('task_op');
var y_el = document.getElementById('task_y');
var res_el = document.getElementById('task_res');

var btn_correct_el = document.getElementById('button_correct');
var btn_wrong_el = document.getElementById('button_wrong');

var old_str = '';

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function calc_my() {
	var x = x_el.innerText;
	var op = op_el.innerText;
	if (op == '×') { op = '*'; }
	if (op == '–') { op = '-'; }
	var y = y_el.innerText;
	var res = res_el.innerText;
	var str = x+op+y+'=='+res;
	if (str!=old_str) {
		old_str = str;
		var b = eval(str);
		console.log(b);
		if (b) {
			btn_correct_el.click();
		}
		else {
			btn_wrong_el.click();
		}
	}
	setTimeout(calc_my,randomInteger(950,2500));
}

calc_my();
