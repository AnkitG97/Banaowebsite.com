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
   document.getElementById("content3").appendChild(y);
  
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
            var myDiv = document.getElementById("content2"); 
              
            // creating checkbox element 
            var checkbox = document.createElement('input'); 
              
            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = "value"; 
            checkbox.id = "id"; 
              
            // creating label for checkbox 
            var label = document.createElement('label'); 
              
            // assigning attributes for  
            // the created label tag  
            label.htmlFor = "id"; 
              
            // appending the created text to  
            // the created label tag  
            label.appendChild(document.createTextNode('This is the label for checkbox.')); 
              
            // appending the checkbox 
            // and label to div 
            myDiv.appendChild(checkbox); 
            myDiv.appendChild(label); 
        }
