function aprēķinātIlgumu() {
  var attalums = document.getElementById('attalums').value;
  var atrums = document.getElementById('atruma').value;

  if (attalums === '' || atrums === '') {
    alert('Lūdzu, ievadiet attālumu un braukšanas ātrumu');
    return;
  }

  attalums = parseFloat(attalums);
  atrums = parseFloat(atrums);

  if (isNaN(attalums) || isNaN(atrums)) {
    alert('Lūdzu, ievadiet derīgus skaitļus');
    return;
  }

  var laiksStundās = attalums / atrums;
  var laiksMinūtēs = laiksStundās * 60;

  var rezultats = `Braucot ar ātrumu ${atrums} km/h, ceļojuma laiks uz ${attalums} km būs apmēram ${laiksStundās.toFixed(2)} stundas, jeb ${laiksMinūtēs.toFixed(2)} minūtes.`;

  document.getElementById('rezultats').innerHTML = rezultats;
}
