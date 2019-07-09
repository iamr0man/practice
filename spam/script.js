const isSpam = (arr, word, amountRepeatWord) => {
    arr = $('#comment').val().split(' ');
    word = $("#spam-word").val();
    amountRepeatWord = 3
    let counter = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === word) {
            counter++;
        }
    }
    $('#spam-check-result').text(counter >= amountRepeatWord);
}

$('#send-comment').on('click', isSpam);