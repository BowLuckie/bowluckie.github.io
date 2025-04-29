document.addEventListener('DOMContentLoaded', function () {
    var ClickNum = -1;
    const responses = ["HEY", "Stop pressing", "I said stop pressing", "I'm warning you", "You're going to break it", "Dont press it one more time"];
    document.getElementById("myButton").addEventListener("click", function () {
        ClickNum++;
        if (ClickNum < responses.length) {
            document.getElementById("output").innerHTML = responses[ClickNum];
        } else {
            var output = document.getElementById("output");
            output.style.color = "red";
            output.style.fontSize = "50px";
            output.style.fontWeight = "bold";
            output.innerHTML = "YOU JUST BLEW UP WAZIR'S COMPUTER";
            output.classList.add("placeflash");
            document.getElementById("myButton").classList.remove("newButton");
            document.getElementById("myButton").classList.add("HIDE");
            

            
            setTimeout(function () {
                var imgElement = document.getElementById("myImage");

                imgElement.style.display = "block"; // Display the image
                document.getElementById("myImage").classList.add("place");
            }, 1000);

            setTimeout(function () {
                var newButton = document.getElementById("newButton");
                newButton.textContent = "Apologize";
                newButton.classList.add("newButton");
                newButton.classList.remove("HIDE");
                newButton.classList.add("place");
            }, 1500);

            newButton.addEventListener("click", function () {
                var newOutput = document.getElementById("newOutput");
                newOutput.style.color = "red";
                newOutput.style.fontSize = "50px";
                newOutput.style.fontWeight = "bold";
                newOutput.innerHTML = "YOU JUST BLEW UP WAZIR'S HOUSE!";
                newOutput.classList.add("placeflash");
                newButton.classList.remove("place");
                newButton.classList.remove("newButton");
                newButton.classList.add("HIDE");
                
                

                setTimeout(function () {
                    var imgElement = document.getElementById("newImage");

                    imgElement.style.display = "block"; // Display the image
                    document.getElementById("newImage").classList.add("place");
                }, 1000);
            });
        }
    });
});
