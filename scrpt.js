let herDay =5;//simple variable declaration .
console.log(herDay);

function fumDay(ball) {
    console.log(prompt("password"));
}
fumDay();
a=5;
const sum = a+5;
console.log(sum);
(function () {
    
     
  
    var names = ["Yahya", "James", "Jenny", "John", "Papa", "Frank", "Ladi", "Paula", "Lara", "Jumoke"];
    (function (window) {
       
      var helloSpeaker = {};
      
      
        var speakWord = "Hello";
      
      
        helloSpeaker.speak = function (name) {
          document.write(speakWord + " " + name + "<br/>");
        };
      
    
        window.helloSpeaker = helloSpeaker;
      
      })(window);

      (function (window) {
    
        var byeSpeaker = {};
      
      
        var speakWord = "Good Bye";
      

        byeSpeaker.speak = function (name) {
          document.write(speakWord + " " + name+ "<br/>");
        };
      
      
        window.byeSpeaker = byeSpeaker;
      
      })(window);
      
  
    for (var i = 0; i < names.length; i++) {
  
    
       var firstLetter = names[i].charAt(0).toLowerCase();
  
      
      if (firstLetter === 'j') {
         byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();
  