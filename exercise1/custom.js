function User(name, age) {
  //Assigning values through constructor
  this.name = name;
  this.age = age;
}
User.prototype.compare = function(user) {
  if (this.age > user.age){
    return  this.name + ' is older than ' + user.name;
  }
  else if (this.age == user.age){
    return  this.name + ' and ' + user.name + ' both are same age ';
  }
  else {
    return  user.name + ' is older than ' + this.name;
  }
};
//Creating First user instance
var user1 = new User("john", 23);

//Creating Second user instance
var user2 = new User("mary", 23);

document.getElementById("demo").innerHTML = user1.compare(user2);


