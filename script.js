$(document).ready(function() {
$('#submit').click (function() {
$('#submit').hide();
var yearString = $('#input-year').val();
var year = parseInt(yearString);

if (year >= 1998 && year <= 2012) { 
	$('h3').text 'Hugo Chavez Frias'();
} else if (year >= 2013 && year <= 2017) {
      $('h3').text'Nicolas Maduro'();
} else if (year >= 1958 && year <= 1959) {
      $('h3').text 'Wolfgang Larrazábal'();
} else if (year = 1959) {
      $('h3').text 'Edgar Sanabría'();
} else if (year >= 1959 && year <= 1964) {
      $('h3').text'Romulo Bentancourt'();
} else if (year >= 1964 && year <= 1969) {
      $('h3').text'Raul Leoni'();
} else if (year >= 1969 && year <= 1974) {
      $('h3').text'Rafael Caldera'();
} else if (year >= 1974 && year <= 1979) {
      $('h3').text'Carlos Andres Perez'();
} else if (year >= 1979 && year <= 1984) {
      $('h3').text'Luis Herrera Campins'();
} else if (year >= 1984 && year <= 1989) {
      $('h3').text'Jaime Lusinchi'();
} else if (year >= 1989 && year <= 1993) {
      $('h3').text'Carlos Andres Perez'();
} else if (year = 1993) {
      $('h3').text'Octavio Lepage'();
} else if (year >= 1993 && year <= 1994) {
      $('h3').text'Ramon Jose Velasquez'();
} else if (year >= 1994 && year <= 1999) {
      $('h3').text'Rafael Caldera'();

});