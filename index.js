// Write your classes here
// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class that extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Define the Evergreen class that extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }
  
  // Testing the classes
  const oakTree = new Deciduous("Oak", "Oak Tree");
  console.log(oakTree.species); // Output: Oak
  console.log(oakTree.name); // Output: Oak Tree
  console.log(Deciduous.definition());
  // Output:
  // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.
  // Deciduous trees shed their leaves annually.
  
  const pineTree = new Evergreen("Pine", "Pine Tree");
  console.log(pineTree.species); // Output: Pine
  console.log(pineTree.name); // Output: Pine Tree
  console.log(Evergreen.definition());
  // Output:
  // A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.
  // Evergreens keep their leaves all year round.
  