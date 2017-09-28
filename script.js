var plus = document.getElementById("add");
var minus = document.querySelector(".minus");
var counter = 2;
var field = document.getElementById("addField");

plus.addEventListener("click", function(){
    if(counter <= 4){
        field.insertAdjacentHTML("beforeend", '<div id="bp' + counter + '" class="form-element fadeOutIn">' + 
        '<input type="text" name="Name ' + counter + 
        '" id="newField" placeholder="Name ' + counter + '"><input type="text" name="Title" id="" placeholder="Title"></div>');
        minus.classList.remove("hidden");
        counter++;
    }
});

minus.addEventListener("click", function(){
    $("#addField")
      .children()
      .last()
      .remove();
      counter--;
      if (counter == 2) {
        minus.classList.add("hidden");
      }
});

