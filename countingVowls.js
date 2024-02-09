function vowels(str) {
    const vowelsList = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (let j = 0; j < str.length; j++) {
      for (let i = 0; i < vowelsList.length; i++) {
        if (str[j].toLowerCase() === vowelsList[i]) {
          count++;
        }
      }
    }
  
    return count;
  }

console.log(vowels('Why do you ask?'))