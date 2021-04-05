let names = ["Maria", "Laura", "Lucia", "Marta", "Carolina", "Carla", "Marina", "Julia", "Carlota", "Mar", "Lorena", "Alejandra", "Sara", "Caterina", "Natalia", "Cristina", "Ana", "Elisa", "Valentina", "Matilde"]
let favNames = []

babyNames.onshow = function() {
    for (i = 0; i < names.length; i++)
        selNames.addItem(names[i])
}


btnSee.onclick = function() {
   favNames.push(selNames.text)
   console.log(favNames)
    ChangeForm(favBabyNames)
}
