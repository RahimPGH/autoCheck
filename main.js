function Checked(){
    const  inputs =  document.querySelectorAll("input[type='checkbox']");
    inputs.forEach(input => {
        input.checked = true;
        input.setAttribute('checked' , true)
    });
}

Checked();

document.addEventListener('click' , function() {
    setTimeout(() => {
        Checked();
    }, 50);
})
