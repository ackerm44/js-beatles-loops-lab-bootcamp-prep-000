function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (i = 0; i < musicians.length; i++) {
    for (j = 0; j < instruments.length; j++) {
      array.push(musicians[i] + " plays " + instruments[j]);
    }
  }
  return array; 
}
