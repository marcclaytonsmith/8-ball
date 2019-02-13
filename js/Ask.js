            //Create a string variable to store the previous asked question.
            var lastQuestion = "";
              
            //Make a function to be called with the button click event.
            function Ask(){
                //Create a variable for the text entered into the textbox.
                var input = document.getElementById("txtQuestion").value;
                //Create a variable for the last character of the question the user types. This should be a "?".
                var lastChar = input.charAt(input.length-1);
                
                //If the user leaves the textbox blank, output an alert. Else, continue.
                if(document.getElementById("txtQuestion").value == ""){
                    alert("The textbox is blank. Please type a question!")
                //If the user ONLY types a "?". output an alert. Else, continue.
                }else if(document.getElementById("txtQuestion").value == "?"){
                    alert("You typed only the question mark symbol. Please type an actual question!")
                //If the user forgets to inlcude a "?" at the end of their question, output an alert. Else, continue.
                }else if(document.getElementById("txtQuestion").value.indexOf('?')<1){
                        alert("Please put a '?' at the end of your question!")
                //If the same question is asked in a row, output an alert. Else, continue.
                }else if(document.getElementById("txtQuestion").value == lastQuestion){
                        alert("You asked the same question. Please type a new one!")
                //Output the anser from the Array (stored in the variable arrAnswer).
                }else{
                        document.getElementById("Answer").innerHTML = arrAnswer[Math.floor(Math.random()*arrAnswer.length)];
                        //Take the question that was asked and store it in the variable lastQuestion. See code line #21.
                        lastQuestion = document.getElementById("txtQuestion").value;
                }
            }

            //Create an Array variable to store all of the answers for the Magic 8 Ball game.
            var arrAnswer = new Array();
            arrAnswer[0] = "Ask again later…";
            arrAnswer[1] = "Yes";
            arrAnswer[2] = "No";
            arrAnswer[3] = "It appears to be so";
            arrAnswer[4] = "Reply is hazy, please try again";
            arrAnswer[5] = "Yes, definitely";
            arrAnswer[6] = "What is it you really want to know?";
            arrAnswer[7] = "Outlook is good";
            arrAnswer[8] = "My sources say no";
            arrAnswer[9] = "Signs point to yes";
            arrAnswer[10] = "Don’t count on it";
            arrAnswer[11] = "Cannot predict now";
            arrAnswer[12] = "As I see it, yes";
            arrAnswer[13] = "Better not tell you now";
            arrAnswer[14] = "Concentrate and ask again";