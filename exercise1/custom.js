function user(name, age) {
  //Assigning values through constructor
  this.name = name;
  this.age = age;
}
user.prototype.compare = function(user) {
  if (this.age > user.age){
    return  'john is older than mary';
  }
  else {
    return  'mary is older than john';
  }
};
//Creating First user instance
var user1 = new user("john", 23);

//Creating Second user instance
var user2 = new user("mary", 21);

document.getElementById("demo").innerHTML = user1.compare(user2);


