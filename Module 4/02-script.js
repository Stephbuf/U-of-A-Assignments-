async  function main() {
    //data structures
    //dictionaries (objects)
    //key-value pairs

    let myDictionary = {
        A: "An average grade",
        B: "Better study more",
        C: "Could be better",
        D: "Do your best",
        F: "Failed"
    };

    myDictionary["G"] = "This is not a valid grade"; //Adds a new key-value pair
    output(myDictionary["G"]); //Outputs: This is not a valid grade
    output(myDictionary["A"]); //Outputs: An average grade

    myDictionary["C"] = "Cook your own meals"; //Changes the value for key "C"

    delete myDictionary["G"]; //Removes the key-value pair with key "G"
    output(!("G" in myDictionary)); //Outputs: true

    //Sets
    const favoriteColors = new Set(["red", "blue", "green"]); 
    favoriteColors.add("purple"); //Adds purple to the set
    favoriteColors.add("blue"); //  Does nothing since blue is already in the set
    favoriteColors.delete("red"); //Removes red from the set
    output(favoriteColors.has("red")); //Outputs: false

const numbers = [1,1,2,3,3,4];
const unique = [...new Set(numbers)];
output(unique); //Outputs: [1,2,3,4]

}

