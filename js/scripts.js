function arrMake (userString) {
  return userString.split('');
};

function vowSearch (arrayVar) {
    if ((arrayVar[0]) == ('a' || 'e' || 'i' || 'o')) {
      arrayVar.push('ay');
  };
  return arrayVar.join('');
};

function quSearch (arrayVar) {
  if (arrayVar[1] == 'q' ) {
    quSlice = arrayVar.slice(0, 3);
    for (i = 3; i > 0; i--) {
      arrayVar.shift(0);
      alert('popped' + i);
    };
    for (i = 0; i < quSlice.length; i++) {
      a = quSlice[i];
      alert(quSlice[i]);
      arrayVar.push(a);
    };
    arrayVar.push('ay');
    return arrayVar.join('');
  };
};

function conSearch (arrayVar) {
  for (i = 0; i <= arrayVar.length; i++) {
    if ((arrayVar[0]) != ('a' || 'e' || 'i' || 'o')) {
      arrayVar.push(arrayVar[0]);
      arrayVar.shift(0);
    };
    arrayVar.push('ay');
  };
  return arrayVar.join('');
};

$(function () {
  console.log(arrMake($('input#stuff').val()));
  event.preventDefault();
});

/* right now there is the matter of trying to figure out why the console.log won't occur'*/
