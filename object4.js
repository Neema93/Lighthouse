/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
const facebookProfile={
    name:"neema",
    friends:15,
    messages:["meassage1" ,"message2","meassge3"],
    postMessage:function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage:function(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend:function(){
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend:function(){
        if( facebookProfile.friends > 0){
             facebookProfile.friends =  facebookProfile.friends-1;
        }
    }
    
};
console.log(facebookProfile);