// targetting the elements
let book_name = document.querySelector("#book_title")
let file_name = document.querySelector("#file_name")
let image_name = document.querySelector("#image_name")
let copy_btn = document.querySelector("input[type='submit']")

/* in the function below, 
targetting the values of the targetted elements 
and putting the code text in the value of textarea
*/
function myfunction() {

  let book_name_value = book_name.value
  let file_name_value = file_name.value
  let image_name_value = image_name.value

  let generate_code = `
<div class="box">
  <div class="top clearfix">
      <h2>${book_name_value}</h2>
      <a data-download-btn href="Books/${file_name_value}.pdf" download><span class="fa fa-download"></span></a>
  </div>
  <div class="thumbnail"><img src="img/${image_name_value}" alt="book_thumbnail"></div>
  <a class="read_btn" href="Books/${file_name_value}.pdf" target="_blank">Read</a>
</div>`

let mycode = document.querySelector("#mycode")
mycode.value = generate_code
}
myfunction()

// running the function while inputing in the input
book_name.addEventListener('input', myfunction)
file_name.addEventListener('input', myfunction)
image_name.addEventListener('input', myfunction)

/* copieng the value inside the textarea using the
copy_btn */
copy_btn.addEventListener('click', function(e){
  e.preventDefault()
  myFunction()
})

/* below is the function which can, when run copy
the value of targetted element */
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("mycode");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}