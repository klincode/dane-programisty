// Stwórz stronę zawierającą przycisk pt. "Pobierz dane"

// Po kliknięciu przycisku pobierz dane o programiście w formacie JSON z internetu za pomocą Javascript lub jQuery:

// https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

// Pobrane dane wyświetl poniżej przycisku w nowym, stworzonym DIVie o id="dane-programisty".

// Zadanie domowe zrób za pomocą GitHub Pages.

$('document').ready(function () {
  const btn = $('<button>Pobierz dane</button>');
  $('body').append(btn);
  let div = '<div id="dane-programisty"></div>';
  $(btn).after(div);

  $(btn).on('click', function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
      .done(function (data) {
        let result = '';

        for (let key in data) {
          result += `${key}:${data[key]} `
        }
        $('#dane-programisty').text(result);
      })
      .fail(function (error) {
        console.log(error);

      })
  })

})