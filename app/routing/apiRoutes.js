// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// require the friends.js file, and set it to the variable friendsData to be referenced later
const friendsData = require("../data/friends.js");
const express = require("express");
const app = express();

 app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

    // push the results of the user's survey into the surveyResults array as a new object
  app.post("/api/friends", function(req, res) {
    const mostCompatibleFriend = compareFriends(req.body);
    friendsData.push(req.body);
    console.log(friendsData);
    res.send(mostCompatibleFriend.name);
  });

module.exports = app;

// function to compare the total score of the newFriend survey results to the total scores ofeach existing friend in the friends array
function compareFriends(newFriend) {
    let diff = 100;
    let compatibleFriendIndex;
    for (let i = 0; i < friendsData.length; i++) {
        const score = friendsData[i].totalScore;
        const currentDiff = Math.abs(newFriend.totalScore - score);
        if (currentDiff < diff) {
            diff = currentDiff;
            compatibleFriendIndex = i;
        }
    } 
    return friendsData[compatibleFriendIndex];
}

