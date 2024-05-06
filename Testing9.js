// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// console.log(user.name); 


// let user1 = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = {}; // the new empty object
  
//   // let's copy all user properties into it
//   for (let key in user1) {
//     clone[key] = user1[key];
//   }
  
//   // now clone is a fully independent object with the same content
//   clone.name = "Pete"; // changed the data in it
  
//   console.log( user1.name ); 


let user = {
    name: "John",
    age: 30
  };
  //let clone = user;
  let clone = Object.assign({}, user);
  
 console.log(clone.name); // John
 console.log(clone.age); // 30
 
 clone.name = "Adam";
 console.log(clone);
 console.log(user);


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
  
//   console.log( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   clone.sizes.width = 60;    // change a property from one place
//   console.log(clone.sizes.width);
//   console.log(user.sizes.width);


// let user = { name: 'John' };

// let admin = user;

// user.name = 'Pete'; // changed by the "admin" reference

// console.log(user.name); //
// console.log(admin.name); //



  