[{
    id:'123',
    name:'Nikhil',
    room:'Coding'
}]
//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
   this.users = [];   
  } 
  addUser(id, name, room) {
      var user = {id, name, room};
      this.users.push(user);
      return user;
  }    
}

module.exports = {Users};