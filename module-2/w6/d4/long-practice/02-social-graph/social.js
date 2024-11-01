// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    const id = this.currentID += 1;

    const user = { id, name };

    this.users[id] = user;

    this.follows[id] = new Set();

    return id;
  }

  getUser(userID) {

    if(this.users[userID]) return this.users[userID];
    return null;
  }

  follow(userID1, userID2) {

    if(!this.users[userID1] || !this.users[userID2]) return false;

    this.follows[userID1].add(userID2);
    return true;
  }

  getFollows(userID) {

    return this.follows[userID];
  }

  // user1
  // user2
  // user1 -> user2
  // user1
  getFollowers(userID) {

    const followers = new Set();

    for(let id in this.follows){

      if(this.follows[id].has(userID)) {
        //Number(id)
        followers.add(+id);
      }
    }

    return followers;
  }

 // degrees = 1 -> Users your follows also follow
 // degrees = 2 -> Users your follows follows also follow
 // degrees = 3 -> Users your follows follows follows also follow
  getRecommendedFollows(userID, degrees) {
    // Your code here

    const queue = [[userID]];
    const visited = new Set([userID]);
    const recommended = [];

    while(queue.length) {
      const path = queue.shift();
      const id = path[path.length - 1];


      if(path.length > degrees + 2) break;

      
      if(path.length > 2) recommended.push(id);


      const neighbors = this.follows[id];

      for(let neighbor of neighbors) {
        if(!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }

    }

    return recommended;
  }
}

const socialNetwork = new SocialNetwork();

userID1 = socialNetwork.addUser("User 1");
userID2 = socialNetwork.addUser("User 2");
userID3 = socialNetwork.addUser("User 3");
userID4 = socialNetwork.addUser("User 4");
userID5 = socialNetwork.addUser("User 5");
userID6 = socialNetwork.addUser("User 6");

socialNetwork.follow(1, 2);
socialNetwork.follow(2, 3);
socialNetwork.follow(3, 4);
socialNetwork.follow(3, 5);
socialNetwork.follow(4, 1);
socialNetwork.follow(4, 2);
socialNetwork.follow(5, 6);

console.log(socialNetwork)

module.exports = SocialNetwork;
