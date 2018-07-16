$("#teamBtn").click(function(){
	var str = $('#ConfName').val();
	var url = 'http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&week=3&position=QB&playerid=2552466&season=2017&format=json' + str;
	
$.getJSON(url, function(data) {
	console.log(data.players[0].name);	
		$('#teams1').html(data.players[0].name);
		$('#teams1').html(data.players[0].teamAbbr);
		$('#teams1').html(data.players[0].name);
					console.log(data.players[0].name);
					console.log(data.players[0].teamAbbr);
					console.log(data.players[0].name);


			$('#teams2').html(data.players[1].name);
			$('#teams2').html(data.players[1].teamAbbr);
			$('#teams2').html(data.players[1].name);
						console.log(data.players[1].name);
						console.log(data.players[1].teamAbbr);
						console.log(data.players[1].name);

					$('#teams3').html(data.players[2].name);
					$('#teams3').html(data.players[2].teamAbbr);
					$('#teams3').html(data.players[2].name);
							console.log(data.players[2].name);
							console.log(data.players[2].teamAbbr);
							console.log(data.players[2].name);

								$('#teams4').html(data.players[3].name);
								$('#teams4').html(data.players[3].teamAbbr);
								$('#teams4').html(data.players[3].name);
										console.log(data.players[3].name);
										console.log(data.players[3].teamAbbr);
										console.log(data.players[3].name);

											$('#teams5').html(data.players[4].name);
											$('#teams5').html(data.players[4].teamAbbr);
											$('#teams5').html(data.players[4].name);
													console.log(data.players[4].name);
													console.log(data.players[4].teamAbbr);
													console.log(data.players[4].name);

															$('#teams6').html(data.players[5].name);
															$('#teams6').html(data.players[5].teamAbbr);
															$('#teams6').html(data.players[5].name);
																console.log(data.players[5].name);
																console.log(data.players[5].teamAbbr);
																console.log(data.players[5].name);

																	$('#teams7').html(data.players[10].name);
																	$('#teams7').html(data.players[10].teamAbbr);
																	$('#teams7').html(data.players[10].name);
																		console.log(data.players[10].name);
																		console.log(data.players[10].teamAbbr);
																		console.log(data.players[10].name);



																			$('#teams8').html(data.players[7].name);
																			$('#teams8').html(data.players[7].teamAbbr);
																			$('#teams8').html(data.players[7].name);
																					console.log(data.players[7].name);
																					console.log(data.players[7].teamAbbr);
																					console.log(data.players[7].name);


});
});


$('#showBtn').click(function(){
	var url = 'http://api.tvmaze.com/search/shows?q=' + str;
		
			$.getJSON(url, function(result){
       			$("#showtitle").html("");
      				$("#showType").append("");
      						console.log(result);
    });