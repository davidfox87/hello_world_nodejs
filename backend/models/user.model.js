// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/*
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
*/

module.exports = (sequelize, Sequelize) => { 
    
    const User = sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING
        // allowNull defaults to true
        }
    });
    return User;
};

console.log(User === sequelize.models.User);