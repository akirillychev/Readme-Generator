const inquirer = require ("inquirer")

inquirer.prompt([
    {
        type: 'input',
        message: "what is your username?",
        name: 'user',
        validate: user => {
            if(user.length <10){
                return "username is too short.";
            }
            else if(user.toLowerCase()!= user){
                return "username should be Lowercase.";

            }
            else{
                return true;
            }
        }    
    }
]).then( response => {
    console.log(response.user);
});