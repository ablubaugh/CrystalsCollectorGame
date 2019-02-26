var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var amethystChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var citrineChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var jadeChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function randomValues(){
	amethystChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	citrineChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	jadeChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function game(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		randomValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		randomValues();
	}
}



$('#random-number').text(computerChoice);



$('#amethyst').on('click', function(){
	userTotalScore += amethystChoice;
	$('#current-score-counter').text(userTotalScore);
	game();
});


$('#citrine').on('click', function(){
	userTotalScore += citrineChoice;
	$('#current-score-counter').text(userTotalScore);
	game();
});


$('#emerald').on('click', function(){
	userTotalScore += emeraldChoice;
	$('#current-score-counter').text(userTotalScore);
	game();
});


$('#jade').on('click', function(){
	userTotalScore += jadeChoice;
	$('#current-score-counter').text(userTotalScore);
	game();
});
