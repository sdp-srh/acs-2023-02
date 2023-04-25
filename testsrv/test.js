// This function takes an array as an argument and returns a new array with the elements shuffled
const shuffle = (array) => {
    // Create a copy of the array to avoid mutating the original
    let copy = [...array];
    // Loop over the array from the last element to the first
    for (let i = copy.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at i and j
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    // Return the shuffled array
    return copy;
  };
  
  // Create an array of letters from a to f
  let letters = ["a", "b", "c", "d", "e", "f"];
  
  // Call the shuffle function and print the result
  console.log(shuffle(letters));
  