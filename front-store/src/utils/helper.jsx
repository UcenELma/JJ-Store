function generateInitials(firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  }
  
  function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  export { generateInitials, generateRandomColor };