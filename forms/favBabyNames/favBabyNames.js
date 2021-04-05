favBabyNames.onshow=function(){
  drpSelected.clear()
  console.log(favNames)
  for (i = 0; i < 5; i++)
      drpSelected.addItem(favNames[0][i])
      imgBaby.hidden = true
}

drpSelected.onclick = function(s) {
    if (typeof(s) == "object") {
    return
} else {
    lblFavorite.value = `Your favorite name is ${s}!`
    imgBaby.hidden = false
    }
}
