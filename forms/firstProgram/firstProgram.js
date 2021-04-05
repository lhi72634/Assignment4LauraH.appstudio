let query = ""
let req = {}
let results = []
netID = "lhi72634"
let pw = "lhi72634"
let states = []

firstProgram.onshow = function() {
    drpStates.clear()   
    for (i = 0; i < states.length; i++) 
        drpStates.addItem(states[i])
   query = "SELECT * FROM customer"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

   if (req.status == 200) {
       results = JSON.parse(req.responseText)
       console.log(`the results are : \n ${results}`)
       if (results.length == 0)
           lblEmployees.value = "There are no customers in the database."
       else {
           let message = ""
           for (i = 0; i < results.length; i++)
           message = message + results[i][1] + "\n"
           txtaMessage.value = message 
       }

   } else
       lblEmployees.value = "Error code: " + req.status


   for (i = 0; i < results.length; i++)
       states.push(results[i][4])


   drpStates.clear()
   for (i = 0; i < states.length; i++)
       drpStates.addItem(states[i])
}

drpStates.onclick = function(s) {
   if (typeof(s) == "object") {
       return
   } else {
       drpStates.value = s
       console.log(s)
       query = "SELECT * FROM customer WHERE state = '" + s + "'"
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
       if (req.status == 200) {
           results = JSON.parse(req.responseText)
           console.log(`the results are : \n ${results}`)
           if (results.length == 0)
               lblEmployees.value = "There are no customers in the database."
           else {
               let message = ""
               for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
               txtaMessage.value = message 
           }
       }

   }
}

