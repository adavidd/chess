



var whitePieces = [9817, 9814, 9816, 9815, 9813, 9812];
var blackPieces = [9823, 9818, 9819, 9820, 9821, 9822];
var liatOfAllPosition = [];

for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {

      liatOfAllPosition.push(parseInt(i + "" + j));
      
      document.getElementById(i + "" + j).setAttribute("myId", i + "" + j);
      
      function cellOnClick(){
        
        var myClick = this.getAttribute("myId")
        Clicked(myClick)
        
      };
      
      document.getElementById(i + "" + j).onclick = cellOnClick;
      
      if (document.getElementById(i + "" + j).className == "white") {
        document.getElementById(i + "" + j).style.backgroundColor = "white";
        
      }
      else {
        document.getElementById(i + "" + j).style.backgroundColor = "gray";

      }
    }
  }  
  






var whiteTurn = true;

function Clicked(id){

  // clear the table //

  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {

      if (document.getElementById(i + "" + j).className == "white") {
            document.getElementById(i + "" + j).style.backgroundColor = "white";
            
      }
      else {
        document.getElementById(i + "" + j).style.backgroundColor = "gray";

      } 
      
    }
  }










  if (whiteTurn == true) {
    
    var myPosition = document.getElementById(id);

    console.log(id);
    
    if (myPosition.innerHTML.charCodeAt() == 9817) {
      
      PawnWhiteMove(id); 

    }

    else if (myPosition.innerHTML.charCodeAt() == 9815 && myPosition.className == "white") {

        BishopMove(id, "white", "#fff", "&#9815", whitePieces, blackPieces);
      
    }

    else if (myPosition.innerHTML.charCodeAt() == 9815 && myPosition.className == "black") {

        BishopMove(id, "black", "gray", "&#9815", whitePieces, blackPieces);
      
    }
    else if (myPosition.innerHTML.charCodeAt() == 9816 && myPosition.className == "white") {
      
      KnightMove(id, "white", "#fff", "&#9816", whitePieces, blackPieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9816 && myPosition.className == "black") {
      
      KnightMove(id, "black", "gray", "&#9816", whitePieces, blackPieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9814 && myPosition.className == "white") {
      
      RookMove(id, "white", "#fff", "&#9814", whitePieces, blackPieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9814 && myPosition.className == "black") {
      
      RookMove(id, "black", "gray", "&#9814", whitePieces, blackPieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9813) {
      
      QueenMove(id, "black", "gray", "&#9813", whitePieces, blackPieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9812) {
      
      KingMove(id, "black", "gray", "&#9812", whitePieces, blackPieces);

    }

  }






  else if (whiteTurn == false) {

    var myPosition = document.getElementById(id);

    
    if (myPosition.innerHTML.charCodeAt() == 9823) {
      
      PawnBlackMove(id)

    }

    else if (myPosition.innerHTML.charCodeAt() == 9821 && myPosition.className == "white") {

      BishopMove(id, "white", "#fff", "&#9821", blackPieces, whitePieces);

      }

    else if (myPosition.innerHTML.charCodeAt() == 9821 && myPosition.className == "black") {

      
      BishopMove(id, "black", "gray", "&#9821", blackPieces , whitePieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9822 && myPosition.className == "white") {
      
      KnightMove(id, "white", "#fff", "&#9822", blackPieces, whitePieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9822 && myPosition.className == "black") {
      
      KnightMove(id, "black", "gray", "&#9822", blackPieces, whitePieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9820 && myPosition.className == "white") {
      
      RookMove(id, "white", "#fff", "&#9820", blackPieces, whitePieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9820 && myPosition.className == "black") {
      
      RookMove(id, "black", "gray", "&#9820", blackPieces, whitePieces);

    }

    else if (myPosition.innerHTML.charCodeAt() == 9819) {
      
      QueenMove(id, "black", "#fff", "&#9819", blackPieces, whitePieces);

    }

     else if (myPosition.innerHTML.charCodeAt() == 9818) {
      
      KingMove(id, "black", "gray", "&#9818", blackPieces, whitePieces);

    }


  }







function PawnWhiteMove(id){

  var myPosition = document.getElementById(id);
  var firstOptionalPosition = document.getElementById(id - 10);
  var secondOptionalPosition = document.getElementById(id - 20);
  
  var firstEatingOptionalPosition = document.getElementById(id - 11);
  var secondEatingOptionalPosition = document.getElementById(id - 9);

  if (firstOptionalPosition.innerHTML == "") {
    
    firstOptionalPosition.style.backgroundColor = "rgb(204, 195, 195)";
    firstOptionalPosition.style.transition = "background-color 1s linear";
    // firstOptionalPosition.style.boxSizing = "border-box";
    // firstOptionalPosition.style.border = "1px black solid";
    
    firstOptionalPosition.onclick = function () {
      
      if (myPosition.className == "white") {
        
        firstEatingOptionalPosition.style.backgroundColor = "#fff"
        secondEatingOptionalPosition.style.backgroundColor = "#fff"
        firstOptionalPosition.style.border = "none";
        firstEatingOptionalPosition.onclick = cellOnClick;
        secondEatingOptionalPosition.onclick = cellOnClick;

        firstOptionalPosition.innerHTML = "&#9817";
        firstOptionalPosition.style.backgroundColor = "gray";
        secondOptionalPosition.style.backgroundColor = "#fff";
        myPosition.innerHTML = ""; 
      }
      
      else if (myPosition.className == "black") {
        
        firstEatingOptionalPosition.style.backgroundColor = "gray"
        secondEatingOptionalPosition.style.backgroundColor = "gray"
        firstEatingOptionalPosition.onclick = cellOnClick;
        secondEatingOptionalPosition.onclick = cellOnClick;

        firstOptionalPosition.innerHTML = "&#9817";
        firstOptionalPosition.style.backgroundColor = "#fff";
        secondOptionalPosition.style.backgroundColor = "gray";
        myPosition.innerHTML = "";
      }
      
      this.onclick = cellOnClick;
      firstOptionalPosition.onclick = cellOnClick;
      secondOptionalPosition.onclick = cellOnClick;
      whiteTurn = false;
    }
  }
  

  if (id > 70) {

    if (secondOptionalPosition.innerHTML == "") {

      secondOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
      secondOptionalPosition.style.transition = "background-color 1s linear";
    
      secondOptionalPosition.onclick = function () {

        if (myPosition.className == "white") {
          
          secondOptionalPosition.innerHTML = "&#9817";
          firstOptionalPosition.style.backgroundColor = "gray";
          secondOptionalPosition.style.backgroundColor = "#fff";
          myPosition.innerHTML = "";
          }
          else if (myPosition.className == "black") {

              secondOptionalPosition.innerHTML = "&#9817";
              firstOptionalPosition.style.backgroundColor = "#fff";
              secondOptionalPosition.style.backgroundColor = "gray";
              myPosition.innerHTML = "";
              
          }


          this.onclick = cellOnClick;
          firstOptionalPosition.onclick = cellOnClick;
          secondOptionalPosition.onclick = cellOnClick;
          whiteTurn = false;
      }
    }
  }


  if (myPosition.id.toString().slice(-1) != "1") {
    console.log(myPosition.id);
    
    if (blackPieces.includes(firstEatingOptionalPosition.innerHTML.charCodeAt())) {
      firstEatingOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
      firstEatingOptionalPosition.style.transition = "background-color 1s linear";
      
      
      firstEatingOptionalPosition.onclick = function () {

          if (myPosition.className == "white") {
            
            firstEatingOptionalPosition.innerHTML = "&#9817";
            firstEatingOptionalPosition.style.backgroundColor = "#fff";
            secondEatingOptionalPosition.style.backgroundColor = "#fff";
            firstOptionalPosition.style.backgroundColor = "gray";
            myPosition.innerHTML = "";
            }

          else if (myPosition.className == "black") {

              firstEatingOptionalPosition.innerHTML = "&#9817";
              firstEatingOptionalPosition.style.backgroundColor = "gray";
              secondEatingOptionalPosition.style.backgroundColor = "gray";
              firstOptionalPosition.style.backgroundColor = "#fff";
              myPosition.innerHTML = "";
          }


          this.onclick = cellOnClick;
          firstOptionalPosition = cellOnClick;
          firstEatingOptionalPosition.onclick = cellOnClick;
          secondEatingOptionalPosition.onclick = cellOnClick;
          whiteTurn = false;
        }
    }
  }

if (myPosition.id.toString().slice(-1) != "8") {

  if (blackPieces.includes(secondEatingOptionalPosition.innerHTML.charCodeAt())) {
    secondEatingOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
    secondEatingOptionalPosition.style.transition = "background-color 1s linear";
    
    secondEatingOptionalPosition.onclick = function () {

        if (myPosition.className == "white") {
          
          secondEatingOptionalPosition.innerHTML = "&#9817";
          secondEatingOptionalPosition.style.backgroundColor = "#fff";
          firstEatingOptionalPosition.style.backgroundColor = "#fff";
          firstOptionalPosition.style.backgroundColor = "gray";
          myPosition.innerHTML = "";
          }

          else if (myPosition.className == "black") {

              secondEatingOptionalPosition.innerHTML = "&#9817";
              secondEatingOptionalPosition.style.backgroundColor = "gray";
              firstEatingOptionalPosition.style.backgroundColor = "gray";
              firstOptionalPosition.style.backgroundColor = "#fff";
              myPosition.innerHTML = "";
          }


          this.onclick = cellOnClick;
          firstOptionalPosition = cellOnClick;
          secondEatingOptionalPosition.onclick = cellOnClick;
          firstEatingOptionalPosition.onclick = cellOnClick;
          whiteTurn = false;
      }
  }
    
}
}



function PawnBlackMove(id){

  var myPosition = document.getElementById(id);
  var firstOptionalPosition = document.getElementById(parseInt(id) + 10);
  var secondOptionalPosition = document.getElementById(parseInt(id) + 20);

  var firstEatingOptionalPosition = document.getElementById(parseInt(id) + 11);
  var secondEatingOptionalPosition = document.getElementById(parseInt(id) + 9);
  
  // console.log(firstEatingOptionalPosition.innerHTML.charCodeAt());
  // console.log(id + 10);
  
  if (firstOptionalPosition.innerHTML == "") {

    firstOptionalPosition.style.backgroundColor = "rgb(204, 195, 195)";
    firstOptionalPosition.style.transition = "background-color 1s linear";

    firstOptionalPosition.onclick = function () {
      
      if (myPosition.className == "white") {

        firstEatingOptionalPosition.style.backgroundColor = "#fff"
        secondEatingOptionalPosition.style.backgroundColor = "#fff"
        firstEatingOptionalPosition.onclick = cellOnClick;
        secondEatingOptionalPosition.onclick = cellOnClick;
        
        firstOptionalPosition.innerHTML = "&#9823";
        firstOptionalPosition.style.backgroundColor = "#999";
        secondOptionalPosition.style.backgroundColor = "#fff";
        myPosition.innerHTML = ""; 
      }
      
      else if (myPosition.className == "black") {

        firstEatingOptionalPosition.style.backgroundColor = "#999"
        secondEatingOptionalPosition.style.backgroundColor = "#999"
        firstEatingOptionalPosition.onclick = cellOnClick;
        secondEatingOptionalPosition.onclick = cellOnClick;
        
        firstOptionalPosition.innerHTML = "&#9823";
        firstOptionalPosition.style.backgroundColor = "#fff";
        secondOptionalPosition.style.backgroundColor = "#999";
        myPosition.innerHTML = "";
      }
      
      this.onclick = cellOnClick;
      firstOptionalPosition.onclick = cellOnClick;
      secondOptionalPosition.onclick = cellOnClick;
      whiteTurn = true;
      
    }
  }
  

  if (id < 30) {

    if (secondOptionalPosition.innerHTML == "") {
  
      secondOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
      secondOptionalPosition.style.transition = "background-color 1s linear";
      
      secondOptionalPosition.onclick = function () {

        if (myPosition.className == "white") {
          
          secondOptionalPosition.innerHTML = "&#9823";
          firstOptionalPosition.style.backgroundColor = "#999";
          secondOptionalPosition.style.backgroundColor = "#fff";
          myPosition.innerHTML = "";
        }
        else if (myPosition.className == "black") {
          
          secondOptionalPosition.innerHTML = "&#9823";
            firstOptionalPosition.style.backgroundColor = "#fff";
            secondOptionalPosition.style.backgroundColor = "#999";
            myPosition.innerHTML = "";
        }


        this.onclick = cellOnClick;
        firstOptionalPosition.onclick = cellOnClick;
        secondOptionalPosition.onclick = cellOnClick;
        whiteTurn = true;

      }
    } 
  }


if (myPosition.id.toString().slice(-1) != "8") {

  if (whitePieces.includes(firstEatingOptionalPosition.innerHTML.charCodeAt())) {
    firstEatingOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
    firstEatingOptionalPosition.style.transition = "background-color 1s linear";
    
    
    firstEatingOptionalPosition.onclick = function () {

        if (myPosition.className == "white") {
          
          firstEatingOptionalPosition.innerHTML = "&#9823";
          firstEatingOptionalPosition.style.backgroundColor = "#fff";
          secondEatingOptionalPosition.style.backgroundColor = "#fff";
          firstOptionalPosition.style.backgroundColor = "#999";
          myPosition.innerHTML = "";
          }

          else if (myPosition.className == "black") {

              firstEatingOptionalPosition.innerHTML = "&#9823";
              firstEatingOptionalPosition.style.backgroundColor = "#999";
              secondEatingOptionalPosition.style.backgroundColor = "#999";
              firstOptionalPosition.style.backgroundColor = "#fff";
              myPosition.innerHTML = "";
          }


          this.onclick = cellOnClick;
          firstOptionalPosition = cellOnClick;
          firstEatingOptionalPosition.onclick = cellOnClick;
          secondEatingOptionalPosition.onclick = cellOnClick;
          whiteTurn = true;
      }
  }
}
  if (myPosition.id.toString().slice(-1) != "1") {

    if (whitePieces.includes(secondEatingOptionalPosition.innerHTML.charCodeAt())) {
      secondEatingOptionalPosition.style.backgroundColor = " rgb(204, 195, 210)";
      secondEatingOptionalPosition.style.transition = "background-color 1s linear";
      
      secondEatingOptionalPosition.onclick = function () {

          if (myPosition.className == "white") {
            
            secondEatingOptionalPosition.innerHTML = "&#9823";
            secondEatingOptionalPosition.style.backgroundColor = "#fff";
            firstEatingOptionalPosition.style.backgroundColor = "#fff";
            firstOptionalPosition.style.backgroundColor = "#999";
            myPosition.innerHTML = "";
            }

            else if (myPosition.className == "black") {

                secondEatingOptionalPosition.innerHTML = "&#9823";
                secondEatingOptionalPosition.style.backgroundColor = "#999";
                firstEatingOptionalPosition.style.backgroundColor = "#999";
                firstOptionalPosition.style.backgroundColor = "#fff";
                myPosition.innerHTML = "";
            }


            this.onclick = cellOnClick;
            firstOptionalPosition = cellOnClick;
            secondEatingOptionalPosition.onclick = cellOnClick;
            firstEatingOptionalPosition.onclick = cellOnClick;
            whiteTurn = true;
        }
    }
        
  }
}


  
  
  
function BishopMove(id, myClassName, myBackgroundColor, me, myColor, opponentColor){

  var myPosition = document.getElementById(id);
  var moves = id;
  var moves2 = id;
  var moves3 = id;
  var moves4 = id;
  var movesList = [];
  var blackStandIdList = [];





  // add all moves option to moveList


  for (let i = 0; i < 8; i++) {
    
      if (moves.toString().slice(-1) != "1") {

        moves = moves - 11;

        if (liatOfAllPosition.includes(moves)) {

          
          if (myColor.includes(document.getElementById(moves).innerHTML.charCodeAt())) {
            break;
            
          }

          if (opponentColor.includes(document.getElementById(moves).innerHTML.charCodeAt()) && document.getElementById(moves).className == myClassName) {
            document.getElementById(moves).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves).style.transition = "background-color 1s linear";
            blackStandIdList.push(moves);
            break;
            
          }
          
          
          if (moves.toString().slice(-1) == "1" || moves.toString().slice(-1) == "8") {
            movesList.push(moves);
            break
          }

          if (moves.toString().slice(-1) == "0" || moves.toString().slice(-1) == "9") {
            console.log("aaaa " + moves.toString().slice(-1));

            break
          }

          movesList.push(moves);
        }

    }
  }


  for (let i = 0; i < 8; i++) {

    if (moves2.toString().slice(-1) != "8") {


      moves2 = moves2 - 9;

      if (liatOfAllPosition.includes(moves2)) {

        if (myColor.includes(document.getElementById(moves2).innerHTML.charCodeAt())) {
          break;
          
        }
        
        if (opponentColor.includes(document.getElementById(moves2).innerHTML.charCodeAt()) && document.getElementById(moves2).className == myClassName) {
          console.log(document.getElementById(moves2).className);
          
          document.getElementById(moves2).style.backgroundColor = "rgb(204, 195, 210)";
          document.getElementById(moves2).style.transition = "background-color 1s linear";
          blackStandIdList.push(moves2);
          break;
          
        }

        if (moves2.toString().slice(-1) == "1" || moves2.toString().slice(-1) == "8") {
          movesList.push(moves2);
          break
        }

        if (moves2.toString().slice(-1) == "0" || moves2.toString().slice(-1) == "9") {
          console.log("aaaa2 " + moves2.toString().slice(-1));

          break
        }

        movesList.push(moves2)
        
      }

    }
  }

  for (let i = 0; i < 8; i++) {

    if (moves3.toString().slice(-1) != "8") {
      
      moves3 = parseInt(moves3) + 11;
      
      if (liatOfAllPosition.includes(moves3)) {
      
        
        
        if (myColor.includes(document.getElementById(moves3).innerHTML.charCodeAt())) {
          
          break;
          
        }

        if (opponentColor.includes(document.getElementById(moves3).innerHTML.charCodeAt()) && document.getElementById(moves3).className == myClassName) {
          document.getElementById(moves3).style.backgroundColor = "rgb(204, 195, 210)";
          document.getElementById(moves3).style.transition = "background-color 1s linear";
          blackStandIdList.push(moves3);
          break;
          
        }

        if (moves3.toString().slice(-1) == "1" || moves3.toString().slice(-1) == "8") {
          movesList.push(moves3);
          break
        }

       

        movesList.push(moves3)
      }

    }
  }



  for (let i = 0; i < 8; i++) {

    if (moves2.toString().slice(-1) != "1") {


      moves4 = parseInt(moves4) + 9;

      if (liatOfAllPosition.includes(moves4)) {

        if (myColor.includes(document.getElementById(moves4).innerHTML.charCodeAt())) {
          break;
          
        }

        
        if (opponentColor.includes(document.getElementById(moves4).innerHTML.charCodeAt()) && document.getElementById(moves4).className == myClassName) {
          document.getElementById(moves4).style.backgroundColor = "rgb(204, 195, 210)";
          document.getElementById(moves4).style.transition = "background-color 1s linear";
          blackStandIdList.push(moves4);
          break;
          
        }

        if (moves4.toString().slice(-1) == "1") {
          movesList.push(moves4);
          break
        }

        if (moves4.toString().slice(-1) == "8") {
          // movesList.push(moves4);
          // console.log("i am 4" + moves4);

          break
        }

        if (moves4.toString().slice(-1) == "0" || moves4.toString().slice(-1) == "9") {
          console.log("aaaa4 " + moves4.toString().slice(-1));

          break
        }


        movesList.push(moves4)
        
      }

    }
  }
  console.log(movesList);
  console.log(blackStandIdList);
  


  // shows were hi can move //
  
  for (let i = 0; i < movesList.length; i++) {

    if (document.getElementById(movesList[i]).innerHTML == "" && document.getElementById(movesList[i]).className == myClassName) {
      document.getElementById(movesList[i]).style.backgroundColor = "rgb(204, 195, 210)";
      document.getElementById(movesList[i]).style.transition = "background-color 1s linear";
      
    }
    
  }
  
  


  // bishop on clicked Move //
 
  for (let i = 0; i < movesList.length; i++) {
    
    document.getElementById(movesList[i]).onclick = function () {

        document.getElementById(id).innerHTML = "";
        document.getElementById(movesList[i]).innerHTML = me;
        
        for (let i = 0; i < movesList.length; i++) {

          document.getElementById(movesList[i]).style.backgroundColor = myBackgroundColor;
          document.getElementById(movesList[i]).onclick = cellOnClick;
          
          for (let i = 0; i < blackStandIdList.length; i++) {
              document.getElementById(blackStandIdList[i]).style.backgroundColor = myBackgroundColor;
              document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
          }
        }

        document.getElementById(id).onclick = cellOnClick;
        if (myColor == whitePieces) {
          
          whiteTurn = false;
        }
        else {
          whiteTurn = true;
        }

    }
    
  }
  
  if (blackStandIdList.length > 0) {
    
    for (let i = 0; i < blackStandIdList.length; i++) {
      document.getElementById(blackStandIdList[i]).onclick = function() {

          document.getElementById(id).innerHTML = "";
          document.getElementById(blackStandIdList[i]).innerHTML = me;

          for (let i = 0; i < movesList.length; i++) {

            document.getElementById(movesList[i]).style.backgroundColor = myBackgroundColor;
            document.getElementById(movesList[i]).onclick = cellOnClick;

            for (let i = 0; i < blackStandIdList.length; i++) {
                document.getElementById(blackStandIdList[i]).style.backgroundColor = myBackgroundColor;
                document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
            }
          }


          document.getElementById(id).onclick = cellOnClick;
          if (myColor == whitePieces) {
          
            whiteTurn = false;
          }
          else {
            whiteTurn = true;
          }          
        }
      
    }
  }
  


} 
  


function KnightMove(id, myClassName, myBackgroundColor, me, myColor, opponentColor) {
  
  var myPosition = document.getElementById(id);

  var optionalMoves = [
  id - 21,      
  id - 8,      
  id - 19,      
  id - 12,      
  parseInt(id) + 12,      
  parseInt(id) + 8,      
  parseInt(id) + 21,      
  parseInt(id) + 19,      
  ];

  var movesList = [];
  var blackStandIdList = [];
  

  for (let i = 0; i < optionalMoves.length; i++) {

      if (liatOfAllPosition.includes(optionalMoves[i])) {

        
        if (document.getElementById(optionalMoves[i]).innerHTML == "") {
          movesList.push(optionalMoves[i]);
          document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
          document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
        }
        

        else if (opponentColor.includes(document.getElementById(optionalMoves[i]).innerHTML.charCodeAt())){
          movesList.push(optionalMoves[i]);
          document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
          document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
            
        }        
      }
  }




  for (let i = 0; i < movesList.length; i++) {

      document.getElementById(movesList[i]).onclick = function () {
        
          myPosition.innerHTML = "";
          document.getElementById(movesList[i]).innerHTML = me;
          
          for (let i = 0; i < movesList.length; i++) {

            if (myPosition.className == "white") {
              
              document.getElementById(movesList[i]).style.backgroundColor = "gray";
              document.getElementById(movesList[i]).onclick = cellOnClick;
              
            }

            else {

              document.getElementById(movesList[i]).style.backgroundColor = "#fff";
              document.getElementById(movesList[i]).onclick = cellOnClick;
            }

          }

          myPosition.onclick = cellOnClick;

          if (myColor == whitePieces) {

            whiteTurn = false;
          }

          else {
            whiteTurn = true;
          }


      }

  }
  
    



}



function RookMove(id, myClassName, myBackgroundColor, me, myColor, opponentColor) {


    var myPosition = document.getElementById(id);
    var move1 = id;
    var move2 = id;
    var move3 = id;
    var move4 = id;
    var optionalMoves = [];
    var movesList = [];

    
    for (let i = 1; i < 8; i ++) {

      
      move1 = parseInt(move1) + 1;

      if (liatOfAllPosition.includes(move1)) {

          if (myPosition.id.toString().slice(-1) == "8") {
            break;
          }  

          if (move1.toString().slice(-1) == "8") {
            document.getElementById(move1).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move1).style.transition = "background-color 1s linear";
            optionalMoves.push(move1);
            break;
          }  

          if (myColor.includes(document.getElementById(move1).innerHTML.charCodeAt())) {
            console.log("1111");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(move1).innerHTML.charCodeAt())) {
            document.getElementById(move1).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move1).style.transition = "background-color 1s linear";
            optionalMoves.push(move1);
            break;
            
          }

          optionalMoves.push(move1);

          }


    }


    for (let i = 1; i < 8; i ++) {

      
      move2 = move2 - 1;

      if (liatOfAllPosition.includes(move2)) {

          if (myPosition.id.toString().slice(-1) == "1") {
            break;
          }

          if (move2.toString().slice(-1) == "1") {
            document.getElementById(move2).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move2).style.transition = "background-color 1s linear";
            optionalMoves.push(move2);
            break;
          }  

                        
          if (myColor.includes(document.getElementById(move2).innerHTML.charCodeAt())) {
            console.log("2222");
            
            break;
            
          }

          if (opponentColor.includes(document.getElementById(move2).innerHTML.charCodeAt())) {
            document.getElementById(move2).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move2).style.transition = "background-color 1s linear";
            optionalMoves.push(move2);
            break;
            
          }

          optionalMoves.push(move2);

          }


    }


    for (let i = 1; i < 8; i ++) {

      
      move3 = parseInt(move3) + 10;

      if (liatOfAllPosition.includes(move3)) {

                        
          if (myColor.includes(document.getElementById(move3).innerHTML.charCodeAt())) {
            console.log("3333");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(move3).innerHTML.charCodeAt())) {
            document.getElementById(move3).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move3).style.transition = "background-color 1s linear";
            optionalMoves.push(move3);
            break;
            
          }

          optionalMoves.push(move3);

          }


    }



    for (let i = 1; i < 8; i ++) {

      // optionalMoves.push(parseInt(id) + i)
      
      move4 = move4 - 10;

      if (liatOfAllPosition.includes(move4)) {

                        
          if (myColor.includes(document.getElementById(move4).innerHTML.charCodeAt())) {
            console.log("4444");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(move4).innerHTML.charCodeAt())) {
            document.getElementById(move4).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(move4).style.transition = "background-color 1s linear";
            optionalMoves.push(move4);
            break;
            
          }

          optionalMoves.push(move4);

          }


    }

    console.log(optionalMoves);
    






    for (let i = 0; i < optionalMoves.length; i++) {

        if (liatOfAllPosition.includes(optionalMoves[i])) {
          
          if (document.getElementById(optionalMoves[i]).innerHTML == "") {
            movesList.push(optionalMoves[i]);

            if (document.getElementById(optionalMoves[i]).className == "white") {

                document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
                document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
              
            }

            else if (document.getElementById(optionalMoves[i]).className == "black") {

                document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 210)";
                document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
            }
          }
        

          else if (opponentColor.includes(document.getElementById(optionalMoves[i]).innerHTML.charCodeAt())){
            movesList.push(optionalMoves[i]);

            if (document.getElementById(optionalMoves[i]).className == "white") {

                document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
                document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";

                }

            else if (document.getElementById(optionalMoves[i]).className == "black") {

            document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
            }
              
          }        
        }

    }

    console.log(movesList);


    //onclock move list

    for (let i = 0; i < movesList.length; i++) {

          document.getElementById(movesList[i]).onclick = function() {
          console.log(movesList[i]);
          myPosition.innerHTML = "";
          document.getElementById(movesList[i]).innerHTML = me;
          
          for (let i = 0; i < movesList.length; i++) {

            if (document.getElementById(movesList[i]).className == "white") {
              
              document.getElementById(movesList[i]).style.backgroundColor = "#fff";
              document.getElementById(movesList[i]).onclick = cellOnClick;
              
            }

            else {

              document.getElementById(movesList[i]).style.backgroundColor = "gray";
              document.getElementById(movesList[i]).onclick = cellOnClick;
            }

          }

          myPosition.onclick = cellOnClick;

          if (myColor == whitePieces) {

            whiteTurn = false;
          }

          else {
            whiteTurn = true;
          }

      }
    }

}



function QueenMove(id, myClassName, myBackgroundColor, me, myColor, opponentColor) {
  
  var myPosition = document.getElementById(id);
  var moves1 = id;
  var moves2 = id;
  var moves3 = id;
  var moves4 = id;
  var moves5 = id;
  var moves6 = id;
  var moves7 = id;
  var moves8 = id;
  var movesList = [];
  var blackStandIdList = [];
  

  for (let i = 0; i < 8; i++) {
    
    if (moves1.toString().slice(-1) != "1") {

      moves1 = moves1 - 11;

      if (liatOfAllPosition.includes(moves1)) {

        
        if (myColor.includes(document.getElementById(moves1).innerHTML.charCodeAt())) {
          break;
          
        }

        if (opponentColor.includes(document.getElementById(moves1).innerHTML.charCodeAt()) ) {
          document.getElementById(moves1).style.backgroundColor = "rgb(204, 195, 210)";
          document.getElementById(moves1).style.transition = "background-color 1s linear";
          blackStandIdList.push(moves1);
          
          break;
          
        }
        
        
        if (moves1.toString().slice(-1) == "1" || moves1.toString().slice(-1) == "8") {
          movesList.push(moves1);
          break
        }

        if (moves1.toString().slice(-1) == "0" || moves1.toString().slice(-1) == "9") {
          console.log("aaaa " + moves1.toString().slice(-1));

          break
        }

        movesList.push(moves1);
      }

  }
}



for (let i = 0; i < 8; i++) {

  if (moves2.toString().slice(-1) != "8") {


    moves2 = moves2 - 9;

    if (liatOfAllPosition.includes(moves2)) {

      if (myColor.includes(document.getElementById(moves2).innerHTML.charCodeAt())) {
        break;
        
      }
      
      if (opponentColor.includes(document.getElementById(moves2).innerHTML.charCodeAt())) {
        
        document.getElementById(moves2).style.backgroundColor = "rgb(204, 195, 210)";
        document.getElementById(moves2).style.transition = "background-color 1s linear";
        blackStandIdList.push(moves2);
        break;
        
      }

      if (moves2.toString().slice(-1) == "1" || moves2.toString().slice(-1) == "8") {
        movesList.push(moves2);
        break
      }

      if (moves2.toString().slice(-1) == "0" || moves2.toString().slice(-1) == "9") {
        console.log("aaaa2 " + moves2.toString().slice(-1));

        break
      }

      movesList.push(moves2)
      
    }

  }
}

for (let i = 0; i < 8; i++) {

if (moves3.toString().slice(-1) != "8") {

moves3 = parseInt(moves3) + 11;

if (liatOfAllPosition.includes(moves3)) {



if (myColor.includes(document.getElementById(moves3).innerHTML.charCodeAt())) {
  
  break;
  
}

if (opponentColor.includes(document.getElementById(moves3).innerHTML.charCodeAt())) {
  document.getElementById(moves3).style.backgroundColor = "rgb(204, 195, 210)";
  document.getElementById(moves3).style.transition = "background-color 1s linear";
  blackStandIdList.push(moves3);
  break;
  
}

if (moves3.toString().slice(-1) == "1" || moves3.toString().slice(-1) == "8") {
  movesList.push(moves3);
  break
}



movesList.push(moves3)
}

}
}



for (let i = 0; i < 8; i++) {

if (moves4.toString().slice(-1) != "1") {


moves4 = parseInt(moves4) + 9;

if (liatOfAllPosition.includes(moves4)) {

if (myColor.includes(document.getElementById(moves4).innerHTML.charCodeAt())) {
  break;
  
}


if (opponentColor.includes(document.getElementById(moves4).innerHTML.charCodeAt()) ) {
  document.getElementById(moves4).style.backgroundColor = "rgb(204, 195, 210)";
  document.getElementById(moves4).style.transition = "background-color 1s linear";
  blackStandIdList.push(moves4);
  if (document.getElementById(moves4).innerHTML.charCodeAt() == 9812) {
            console.log("chack");
            
          }
  break;
  
}

if (moves4.toString().slice(-1) == "1") {
  movesList.push(moves4);
  break
}

if (moves4.toString().slice(-1) == "8") {
 
  break
}

if (moves4.toString().slice(-1) == "0" || moves4.toString().slice(-1) == "9") {
  console.log("aaaa4 " + moves4.toString().slice(-1));

  break
}


movesList.push(moves4)

}

}
}






for (let i = 1; i < 8; i ++) {

      
      moves5 = parseInt(moves5) + 1;

      if (liatOfAllPosition.includes(moves5)) {

          if (myPosition.id.toString().slice(-1) == "8") {
            break;
          }  

          if (moves5.toString().slice(-1) == "8") {
            document.getElementById(moves5).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves5).style.transition = "background-color 1s linear";
            movesList.push(moves5);
            break;
          }  

          if (myColor.includes(document.getElementById(moves5).innerHTML.charCodeAt())) {
            console.log("1111");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(moves5).innerHTML.charCodeAt())) {
            document.getElementById(moves5).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves5).style.transition = "background-color 1s linear";
            movesList.push(moves5);
            break;
            
          }

          movesList.push(moves5);

          }


    }


    for (let i = 1; i < 8; i ++) {

      
      moves6 = moves6 - 1;

      if (liatOfAllPosition.includes(moves6)) {

          if (myPosition.id.toString().slice(-1) == "1") {
            break;
          }

          if (moves6.toString().slice(-1) == "1") {
            document.getElementById(moves6).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves6).style.transition = "background-color 1s linear";
            movesList.push(moves6);
            break;
          }  

                        
          if (myColor.includes(document.getElementById(moves6).innerHTML.charCodeAt())) {
            console.log("2222");
            
            break;
            
          }

          if (opponentColor.includes(document.getElementById(moves6).innerHTML.charCodeAt())) {
            document.getElementById(moves6).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves6).style.transition = "background-color 1s linear";
            movesList.push(moves6);
            break;
            
          }

          movesList.push(moves6);

          }


    }


    for (let i = 1; i < 8; i ++) {

      
      moves7 = parseInt(moves7) + 10;

      if (liatOfAllPosition.includes(moves7)) {

                        
          if (myColor.includes(document.getElementById(moves7).innerHTML.charCodeAt())) {
            console.log("3333");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(moves7).innerHTML.charCodeAt())) {
            document.getElementById(moves7).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(moves7).style.transition = "background-color 1s linear";
            movesList.push(moves7);
            break;
            
          }

          movesList.push(moves7);

          }


    }



    for (let i = 1; i < 8; i ++) {

      // optionalMoves.push(parseInt(id) + i)
      
      moves8 = moves8 - 10;

      if (liatOfAllPosition.includes(moves8)) {

                        
          if (myColor.includes(document.getElementById(moves8).innerHTML.charCodeAt())) {
            console.log("4444");

            break;
            
          }

          if (opponentColor.includes(document.getElementById(moves8).innerHTML.charCodeAt())) {
            
            if (document.getElementById(moves8).className == "white") {

              document.getElementById(moves8).style.backgroundColor = "rgb(204, 195, 195)";
              document.getElementById(moves8).style.transition = "background-color 1s linear";

              }

              else if (document.getElementById(moves8).className == "black") {

              document.getElementById(moves8).style.backgroundColor = "rgb(204, 195, 210)";
              document.getElementById(moves8).style.transition = "background-color 1s linear";
              }
            
            movesList.push(moves8);
            break;
            
          }

          movesList.push(moves8);

          }


    }

console.log(movesList);
console.log(blackStandIdList);


      // shows were hi can move
    
for (let i = 0; i < movesList.length; i++) {

    if (document.getElementById(movesList[i]).innerHTML == "") {

      if (document.getElementById(movesList[i]).className == "white") {

        document.getElementById(movesList[i]).style.backgroundColor = "rgb(204, 195, 195)";
        document.getElementById(movesList[i]).style.transition = "background-color 1s linear";

        }

      else if (document.getElementById(movesList[i]).className == "black") {

        document.getElementById(movesList[i]).style.backgroundColor = "rgb(204, 195, 210)";
        document.getElementById(movesList[i]).style.transition = "background-color 1s linear";
      }
    }

}


// qween on clicked Move

for (let i = 0; i < movesList.length; i++) {

  document.getElementById(movesList[i]).onclick = function () {

      document.getElementById(id).innerHTML = "";
      document.getElementById(movesList[i]).innerHTML = me;
      
      for (let i = 0; i < movesList.length; i++) {

        if (document.getElementById(movesList[i]).className == "white") {
          document.getElementById(movesList[i]).style.backgroundColor = "#fff";
          document.getElementById(movesList[i]).onclick = cellOnClick;
          
        }
        else if (document.getElementById(movesList[i]).className == "black") {
          document.getElementById(movesList[i]).style.backgroundColor = "gray";
          document.getElementById(movesList[i]).onclick = cellOnClick;
        }
        

        for (let i = 0; i < blackStandIdList.length; i++) {
            if (document.getElementById(blackStandIdList[i]).className == "white") {
              document.getElementById(blackStandIdList[i]).style.backgroundColor = "#fff";
              document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
              
            }
            else if (document.getElementById(blackStandIdList[i]).className == "black") {
              document.getElementById(blackStandIdList[i]).style.backgroundColor = "gray";
              document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
            }
        }
      }

        document.getElementById(id).onclick = cellOnClick;

      if (myColor == whitePieces) {
        
        whiteTurn = false;
      }
      else {
        whiteTurn = true;
      }

  }

}

    if (blackStandIdList.length > 0) {

    for (let i = 0; i < blackStandIdList.length; i++) {
      document.getElementById(blackStandIdList[i]).onclick = function() {

          document.getElementById(id).innerHTML = "";
          document.getElementById(blackStandIdList[i]).innerHTML = me;

          for (let i = 0; i < movesList.length; i++) {

              if (document.getElementById(movesList[i]).className == "white") {
                document.getElementById(movesList[i]).style.backgroundColor = "#fff";
                document.getElementById(movesList[i]).onclick = cellOnClick;
                
              }
              else if (document.getElementById(movesList[i]).className == "black") {
                document.getElementById(movesList[i]).style.backgroundColor = "gray";
                document.getElementById(movesList[i]).onclick = cellOnClick;
              }


              for (let i = 0; i < blackStandIdList.length; i++) {
                  if (document.getElementById(blackStandIdList[i]).className == "white") {
                    document.getElementById(blackStandIdList[i]).style.backgroundColor = "#fff";
                    document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
                    
                  }
                  else if (document.getElementById(blackStandIdList[i]).className == "black") {
                    document.getElementById(blackStandIdList[i]).style.backgroundColor = "gray";
                    document.getElementById(blackStandIdList[i]).onclick = cellOnClick;
                  }
              }
          }


          document.getElementById(id).onclick = cellOnClick;

          if (myColor == whitePieces) {
          
            whiteTurn = false;
          }
          else {
            whiteTurn = true;
          }          
        }
      
      }
    }

















}


function KingMove(id, myClassName, myBackgroundColor, me, myColor, opponentColor) {


  var myPosition = document.getElementById(id);

  var optionalMoves = [
  id - 1,      
  id - 11,      
  id - 9,      
  id - 10,      
  parseInt(id) + 10,      
  parseInt(id) + 11,      
  parseInt(id) + 9,      
  parseInt(id) + 1,      
  ];

  var movesList = [];
  var blackStandIdList = [];


  for (let i = 0; i < optionalMoves.length; i++) {

      if (liatOfAllPosition.includes(optionalMoves[i])) {

        
        if (document.getElementById(optionalMoves[i]).innerHTML == "") {
          movesList.push(optionalMoves[i]);

          if (document.getElementById(optionalMoves[i]).className == "white") {

            document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
            document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";

          }

          else if (document.getElementById(optionalMoves[i]).className == "black") {

              document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 210)";
              document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
          }
         
        }
        

        else if (opponentColor.includes(document.getElementById(optionalMoves[i]).innerHTML.charCodeAt())){
          movesList.push(optionalMoves[i]);
          
          if (document.getElementById(optionalMoves[i]).className == "white") {

            document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 195)";
            document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";

          }

          else if (document.getElementById(optionalMoves[i]).className == "black") {

            document.getElementById(optionalMoves[i]).style.backgroundColor = "rgb(204, 195, 210)";
            document.getElementById(optionalMoves[i]).style.transition = "background-color 1s linear";
          }
            
        }        
      }
      }


    console.log(movesList);
    

  for (let i = 0; i < movesList.length; i++) {

  document.getElementById(movesList[i]).onclick = function () {
    
      myPosition.innerHTML = "";

      document.getElementById(movesList[i]).innerHTML = me;
      
      for (let i = 0; i < movesList.length; i++) {

        if (document.getElementById(movesList[i]).className == "white") {
          
          document.getElementById(movesList[i]).style.backgroundColor = "#fff";
          document.getElementById(movesList[i]).onclick = cellOnClick;
          
        }

        else {

          document.getElementById(movesList[i]).style.backgroundColor = "gray";
          document.getElementById(movesList[i]).onclick = cellOnClick;
        }

      }

      myPosition.onclick = cellOnClick;

      if (myColor == whitePieces) {

        whiteTurn = false;
      }

      else {
        whiteTurn = true;
      }


  }

  }




} 




}
