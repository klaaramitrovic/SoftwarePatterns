import { isConstructorDeclaration } from "typescript";

interface User {
    role: String;
    getRoleAndWrite: () => void;
}
  
  /** ConcreteProduct */
class RegularUser implements User {
    role: String;

    constructor(
        role: string
      ) {
        this.role = role;
      }

    getRoleAndWrite(): String {
      console.log("I am regular user!");

      return this.role;
    } 
}
  
/** ConcreteProduct */
class Admin implements User {
    role: String;

    constructor(
        role: string
      ) {
        this.role = role;
      }

    getRoleAndWrite(): String {
      console.log("I am admin!");

      return this.role;
    }
}
  
type Type = RegularUser | Admin;

/** Creator */
abstract class Creator {
    public users: User[] = [];
    public abstract create(type: string): void;
    public abstract addUser(u: User): void;
}
  
/** ConcreteCreator */
class UserFactory extends Creator {

  create(type: string): Type {
    if (type === "admin") {
    return new Admin(type);
    } else {
    return new RegularUser(type);
    }
  }

  addUser(u: User): void {
    this.users.push(u);
  }

}
  
const factory = new UserFactory();
factory.addUser(factory.create("admin"));
factory.addUser(factory.create("regular user"));



export {}