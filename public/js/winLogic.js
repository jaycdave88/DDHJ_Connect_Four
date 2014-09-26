$( document ).ready(function() {
   var winCount = 0

  // get current square
  $( '.column' ).on( 'click', function() {
    
    clickCount          = clickCounter.count;

    currentSquare       = $( this ).children( ".empty" ).last().next();

    currentSquareNum    = currentSquare.attr('id');
    
    currentColor        = currentSquare.attr("class");

    currentSquareColNum = $(this).children().last().attr("id");

    // set Current Row Num
    currentSquareRowNum = currentSquareNum
    while (currentSquareRowNum > 6){
          currentSquareRowNum -= 6;
    }

    // set Bottom Left Diagonal
    currentLeftDiagonal = bottomLeftDiagonal(currentSquareNum);


    if(clickCount > 6){
       var result = checkForWin(currentSquareRowNum,currentColor, currentSquareNum);
     }

     if(result == true){
       alert(currentColor + "Wins!");
     }

  }); // Click Event 
  

  function checkForWin(currentSquareRowNum, currentColor, currentSquareNum, i ){ 
   
   // Check for Horizontal Win
   for (i = currentSquareRowNum; i < 43; i+=6){
     if (fourInRowCheck(currentColor,i)){
       return true;
     }
   }    

   // // Check for vertical Win
   //    for (i = currentSquareColNum; i > currentSquareColNum - 6 ; i-=1){
   //      console.log(i)
   //   if (fourInRowCheck(currentColor,i)){
   //     return true;
   //   }
   // } 

   // // Check for Diagonal Win
   // for (i = currentSquareColNum; i > currentSquareColNum - 6 ; i-=1){
   //      console.log(i)
   //   if (fourInRowCheck(currentColor,i)){
   //     return true;
   //   }
   // }

 } // END CHECK FOR WIN  


   function fourInRowCheck(currentColor,i){
   
     if ($("#" + i).hasClass(currentColor)) {
       winCount += 1;
       console.log(winCount);
         if (winCount == 4) {return true;}
     } else {
       winCount = 0;
     }
   
   }// FOUR IN ROW


   function checkArrays(currentColor){

    [4,9,14,19],[5,10,15,20,25],[6,11,16,21,26,31],[12,17,22,27,32,37],[18,23,28,33,38],[24,29,34,39]

    for(){

    }  


   }   


// Diags B-Left to Top-Right
[4,9,14,19],[5,10,15,20,25],[6,11,16,21,26,31],[12,17,22,27,32,37],[18,23,28,33,38],[24,29,34,39]

// Diags T-left to B-right
[3,10,17,24],[2,9,16,23,30],[1,8,15,22,29,36],[7,14,21,28,35,42],[13,20,27,34,41],[19,26,33,40]

});
  

 