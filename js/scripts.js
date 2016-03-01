function arrayMake (userString) {
  return userString.split('');
};

function vowelSearch (arrayVar) {
    if (arrayVar[0] == 'a' || 'e' || 'i' || 'o') {
      arrayVar.push('ay');
  };
  return arrayVar.join('');
};
