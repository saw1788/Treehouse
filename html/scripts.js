function isBackpackFull(startingItems){
    var numItems = 0;

    if (document.getElementById("sword").checked){
        numItems += 1;
    }
    if (document.getElementById("staff").checked){
        numItems += 1;
    }
    if (document.getElementById("bow").checked){
        numItems += 1;
    }
    if (document.getElementById("arrows").checked){
        numItems += 1;
    }
    if (document.getElementById("torch").checked){
        numItems += 1;
    }
    if (document.getElementById("rope").checked){
        numItems += 1;
    }
    if (document.getElementById("cloak").checked){
        numItems += 1;
    }
    if (document.getElementById("canteen").checked){
        numItems += 1;
    }
    if (document.getElementById("rations").checked){
        numItems += 1;
    }
    if (document.getElementById("spellBook").checked){
        numItems += 1;
    }
    if (document.getElementById("lockPick").checked){
        numItems += 1;
    }
    if (numItems > 5) {
        alert('Your backpack is full. Try again.')
    }
}