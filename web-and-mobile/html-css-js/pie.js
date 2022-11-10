window.addEventListener("load", function ()
{
    //get button element reference
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = documnet.getElementById("click-button");

    //counter value
    let counter = 0;

    //click button function
    let clickButtonFunction = function ()
    {
        //increment counter
        counter++;

        //update click counter value.
        clickCounterElement.innerHTML = counter;
    };

    //attach click button
    clickButtonElement.addEventListener("click", clickButtonFunction);
});