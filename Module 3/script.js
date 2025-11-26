async function main() {
    //Exception Handling:
  
    //try, catch, finally, throw

    // try {
    //     //try to run this bit of code
    //     let numner = "a"/2;
    //     output(numner);
    //     // if try triggers no error, this block activates
    // }
    // catch (err){
    //     // if try triggers an error, this block activates
    // } ***this will trigger an error***

     try {
        //try to run this bit of code
       let numner = await input("Please enter a number: ");
       if (isNaN(numner)){
           throw("Not a number"); //returns custom error message6+
       }
        // if try triggers no error, this block activates
    }
    catch (err){
        // if try triggers an error, this block activates
        output("Error: variable not found.");
        output(err);
        }   
        finally {   
            //runs no matter what
            output("This will run no matter what.");
        }
       
    }


    //EvalErrror - significate error in code & security issues
    //RangeError - significate error in code