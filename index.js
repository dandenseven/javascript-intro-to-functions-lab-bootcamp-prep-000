function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
logShout("string")
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var lowercase = "hello!"
var uppercase = "HELLO!"
function sayHiToGrandma(string) {
  if (lowercase.toLowerCase() === lowercase){
    return ("I can't hear you!")
  } else if (uppercase.toUpperCase() === uppercase) {
        return ("YES INDEED!")
  } else if (string === "I love you, too")
        return ("I love you, Grandma.")
  }
