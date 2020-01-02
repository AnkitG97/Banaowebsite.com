let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

function addRow() {
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML =
        '<input type="text" name="name" value="" />\
        <label> <input type="checkbox" name="check" value="1" /> Checked? </label>\
        <input type="button" value="-" onclick="removeRow(this)">';

    document.getElementById('content').appendChild(div);
}

function removeRow(input) {
    document.getElementById('content').removeChild(input.parentNode);
}

// function addCheckbox() {
//    var x = document.createElement("INPUT");
//    // x.setAttribute("type", "checkbox");
//    x.innerHTML='<input type="checkbox" value="-" onclick="removeRadio(this)">';
//    document.getElementById("content2").appendChild(x);
  
// }
function addRadio() {
   var y = document.createElement("INPUT");
   y.setAttribute("type", "radio");
   // y.innerHTML='<input type="button" value="-" onclick="removeRadio(this)">';
   document.getElementById("content").appendChild(y);
  
}
// function removeRadio(input) {
//     document.getElementById('content3').removeChild(input.parentNode);
// }

// function addCheckbox() {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "checkbox");
//   x.innerHTML='<label class="container">One <input type="checkbox" checked="checked"> <span class="checkmark"></span></label>';
//   document.getElementById('content2').appendChild(x);
// }


           function addCheckbox() {
	var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  document.getElementById("content2").appendChild(x);
  
}