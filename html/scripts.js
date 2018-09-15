function isBackpackFull(){
    var numItems = 0;
    var itemArray = [
    "sword",
    "staff",
    "bow",
    "arrows",
    "torch",
    "rope",
    "cloak",
    "canteen",
    "rations",
    "spellBook",
    "lockPick"
    ];

   for (var i=0; i < itemArray.length; i++) {
       if (document.getElementById(itemArray[i]).checked){
           numItems += 1;
           if (numItems > 5) {
            alert('Please choose only five item. Try again.')
            return false;
            }
        }
   }

   
}



// function isBackpackFull(startingItems){
//     var numItems = 0;

//     if (document.getElementById("sword").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("staff").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("bow").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("arrows").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("torch").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("rope").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("cloak").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("canteen").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("rations").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("spellBook").checked){
//         numItems += 1;
//     }
//     if (document.getElementById("lockPick").checked){
//         numItems += 1;
//     }
//     if (numItems > 5) {
//         alert('Your backpack is full. Try again.')
//     }
// }