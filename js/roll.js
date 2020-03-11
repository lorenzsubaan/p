
  var images1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var images2 = ["images/dice5.png","images/dice3.png","images/dice4.png","images/dice2.png","images/dice6.png","images/dice1.png"]; 
  var images3 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var images4 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var player1 = document.querySelector(".player1");
  var player2 = document.querySelector(".player2");
  
  
  function chose(){
    
    var rand = Math.floor(Math.random() * images1.length);
    var rand2 = Math.floor(Math.random() * images2.length);
    document.getElementById('img1').src = images1[rand];
    document.getElementById('img2').src = images2[rand2];

    
  }
 
