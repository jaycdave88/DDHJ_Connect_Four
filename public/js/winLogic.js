   var winCount = 0

  // get current square
  $('.column').on( 'click', function() {
    
    
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

   // Check for vertical Win
      for (i = currentSquareColNum; i > currentSquareColNum - 6 ; i-=1){
        console.log(i)
     if (fourInRowCheck(currentColor,i)){
       return true;
     }
   } 

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

  

 