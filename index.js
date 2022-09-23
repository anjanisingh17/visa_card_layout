let firstinputval = document.querySelector('#first');
let secondinputval = document.querySelector('#second');
let thirdinputval = document.querySelector('#third');

secondinputval.onpaste = e => e.preventDefault();


firstinputval.addEventListener('input',function(e){ 
e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();         
        if(this.value.length >18){
          secondinputval.focus();
        }
})



secondinputval.addEventListener('keyup', function(e) {
let input = secondinputval.value;
let out = input.replace(/\D/g, '');
let len = out.length;
  if(len > 3){
    thirdinputval.focus();
  }
if (len >= 2 ) {
  out = out.substring(0, 2) + '/' + out.substring(2, 4);
}           
secondinputval.value = out;        
});

thirdinputval.addEventListener('input', function(e) {
let input = thirdinputval.value;
let out = input.replace(/\D/g, '');
let len = out.length;
if (len > 0 ){
out = out.substring(0, 3)
}
console.log(`The out is ${out}`)
thirdinputval.value = out; 

})
