/**
 * Create a backpack object
 */

const backpack = {
    name: "Everyday backpack",
    volume: 30,
    color: "Gray",
    pocketNum:15,
    strapLenth:{
     right:27,
     left:27
    },
    lidOpen: false,
    toggleLid: function(lidStatus){
       this.lidOpen=lidStatus;
    },
    newStrapLenth: function(lenthLeft,lenthRight){
        this.strapLenth.right=lenthLeft;
        this.strapLenth.left=lenthRight;
    },
};

//Accessing objects using dot & bracket notation
console.log("The Backpack object:", backpack);

console.log("The backpack name is:", backpack.name); 
console.log("The strapLenth is:", backpack.strapLenth.left);

console.log("The volume of backpack is:", backpack["volume"]);

var query="volume";
console.log("The volume is:", backpack[query]);