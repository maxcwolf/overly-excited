// arrays (the second is from a classic scene found here: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwi8-4Hc99nWAhVi_IMKHRj3BdEQtwIIKDAA&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DldQBm-DW9_8&usg=AOvVaw3sdBpxV-WuaGryy-_5q6RN)

let wordArray = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];
let oldChildrensTalefromTheSea = ['Seven', 'chipmunks', 'twirlin', 'on' , 'a', 'branch', 'eatin', 'lots', 'of', 'sunflowers', 'on', 'my', "uncle's", 'ranch'];

// created function with inputs from the array and a user inputed character
function addExcitement (wordArray, character) {
    //blank sentence for inputing the function results
    let sentence = " ";
    //count variable used in the repeat function to provide additional characters to every third
    let count = 1;
    for(let index = 0; index<wordArray.length; index++) {
        let word=wordArray[index]
        //if there is no remained after dividing by 3, the word pulled from the array has the character added to the end
        if ((index + 1) % 3 === 0) {
            word += character.repeat(count);
            //adds 1 to the count number each time the loop is run (could this be added outside the if funtion as well?)
            count++;
        }
        sentence = sentence + " " + word;
        console.log(sentence);
    }
}
//runs function on the first sentence array
addExcitement(wordArray, "?");
//funs function on the second sentence array
addExcitement(oldChildrensTalefromTheSea, "!");