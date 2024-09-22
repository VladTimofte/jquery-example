$(document).ready(function () {
  // Adauga studentul in lista

  $("#grade-form").on("submit", function (event) {
    event.preventDefault();

    //Obtinem numele si nota studentului
    const name = $("#student-name").val();
    const grade = $("#student-grade").val();

    const regex = /^[a-zA-Z]+$/;

    if (regex.test(name)) {
      //Verificam daca ambele campuri sunt completate
      if (name && grade) {
        // Adauga in lista
        $("#students-list").append(`<li> ${name} - ${grade} </li>`);

        // Reseteaza campurile formularului
        $("#student-name").val("");
        $("#student-grade").val("");
      } else {
        alert("Completeaza ambele campuri!");
      }
    } else {
      alert("Numele studentului Nu trebuie sa containa cifre!");
    }
  });
});
