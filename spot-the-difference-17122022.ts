// This question is asked by Google. You are given two strings, s and t which only consist of lowercase letters. t is generated by shuffling the letters in s as well as potentially adding an additional random character. Return the letter that was randomly added to t if it exists, otherwise, return ’  ‘.
// Note: You may assume that at most one additional character can be added to t.

// Ex: Given the following strings...

// s = "foobar", t = "barfoot", return 't'
// s = "ide", t = "idea", return 'a'
// s = "coding", t "ingcod", return ''

let spotTheDifference = (s: string, t: string): string => {

    

    if(t.length == s.length)
    return '';
    else {
        for (let i = 0; i < t.length; i++){
            if(s.indexOf(t[i]) == -1)
            return t[i]
        }
    }

    return '';
}

let s: string[] = ["foobar", "ide", "coding"];
let t: string[] = ["barfoot", "idea", "ingcod"];

console.log(spotTheDifference(s[2], t[2]));