function translatePigLatin(str) {
    let strArr = str.split('');
    let vowels = 'aeiou';
    let vowelCount = 0;
    for (let i = 0; i < vowels.length; i++) {
      if (str.includes(vowels[i])) {
        vowelCount++;
        }
    }
    console.log(vowelCount)
    if (vowelCount === 0) {
      return str
    }
  console.log(strArr)
  let isFirstLetterVowel = false;
    for (let i = 0; i < vowels.length; i++) {
      console.log(vowels[i], [str[0]])
      if (vowels[i] === str[0]) {
        isFirstLetterVowel = true;
        str += 'way';
        break;
      }
  }
    let firstWovelIndex;
    let match = false;
  
    if (!isFirstLetterVowel) {
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
  
          if (str[i] === vowels[j]) {
            firstWovelIndex = i;
            console.log(firstWovelIndex);
            match = true;
            break;
          }
        }
        if (match) {
          break;
        }
      }
    }
    let beforeVowel = '';
    if (!isFirstLetterVowel) {
      for (let i = 0; i < firstWovelIndex; i++) {
        beforeVowel += str[i];
      }
      console.log(beforeVowel)
    }
  
    let fromVowelToEnd = '';
    if (!isFirstLetterVowel) {
      for (let i = firstWovelIndex; i < str.length; i++) {
        fromVowelToEnd += str[i];
        // console.log(str[i])
      }
      console.log(fromVowelToEnd)
      str = fromVowelToEnd + beforeVowel + 'ay';
  
    }
  
    // console.log(isFirstLetterVowel)
    return str;
  }
  
  console.log(translatePigLatin("bbfffrtrtrt"));