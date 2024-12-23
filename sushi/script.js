$(document).ready(function() {
  const asciiFrames = [
    "         ¯\\\n",
    "        ¯\\_(\n",
    "       ¯\\_(ツ)\n",
    "      ¯\\_(ツ)_/\n",
    "     ¯\\_(ツ)_/¯\n",
    "    ¯\\_(ツ)_/¯  \n",
    "   ¯\\_(ツ)_/¯  🍣\n",
    "  ¯\\_(ツ)_/¯  🍣 Sushi\n",
    " ¯\\_(ツ)_/¯   🍣 Sushi 🍣\n",
    "¯\\_(ツ)_/¯   🍣 Sushi 🍣 ツ\n"
	
  ];

  let index = 0;
  const interval = setInterval(() => {
    $('#ascii-art').append(asciiFrames[index]);
    index++;
    if (index >= asciiFrames.length) {
      clearInterval(interval);
      // After loading, show the terminal
      setTimeout(() => {
        $('#loading-screen').fadeOut(500, function() {
          $(this).remove();
        });
        $('#Terminal').fadeIn(500);
      }, 1000); // Delay before showing terminal
    }
  }, 300); // Adjust speed of animation
});

//Youtube Player
  // YouTube Player Setup
  var player;
  var currentVideoIndex = 0;
  var videoIDs = ['9ao4FEaDGhQ', 'JJgGg1OXj90', '4ZHwu0uut3k']; // Add actual YouTube video IDs

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube-player-container', {
      height: '0',
      width: '0',
      videoId: videoIDs[currentVideoIndex],
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      playNextVideo();
    }
  }

  function playVideo() {
    player.loadVideoById(videoIDs[currentVideoIndex]);
  }

  function stopVideo() {
    player.stopVideo();
  }

  function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoIDs.length;
    playVideo();
  }

//Current line
var CurrentId = undefined;
var hostname = "Sushi";
var username = 'root';
var folder = '~';

//Print Greetings
    $("#Terminal").append('<br/><br/><br/><br/>Welcome to XAT SUSHI console<br/>');
    $("#Terminal").append('The programs included in this XAT GUI are free to use, but there’s no warranty if you break something!<br/>');
    $("#Terminal").append('Proceed with caution—or dont, we really dont care.<br/><br/>');
	//$("#Terminal").append('Type help to see available commands!<br/><br/>');
    $("#Terminal").append('XAT GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent<br/>');
    $("#Terminal").append('permitted by applicable law.<br/><br/>');
 
	//help commands
	$("#Terminal").append('A star (*) next to a name means that the command is disabled.<br/>');
	$("#Terminal").append('<table style="font-family: monospace;">');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">cd [dir]</td><td style="padding-right: 10px;">-</td><td>Change directory</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">clear</td><td style="padding-right: 10px;">-</td><td>Clear console screen</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">echo [arg...]</td><td style="padding-right: 10px;">-</td><td>Echo text back in console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">exit</td><td style="padding-right: 10px;">-</td><td>Logout of console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">logout</td><td style="padding-right: 10px;">-</td><td>Logout of console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">friends</td><td style="padding-right: 10px;">-</td><td>List your friends</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">chat</td><td style="padding-right: 10px;">-</td><td>Open a chat prompt</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">info</td><td style="padding-right: 10px;">-</td><td>Display user and system information</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">random</td><td style="padding-right: 10px;">-</td><td>Generate a random number</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">hi-lo [up/down]</td><td style="padding-right: 10px;">-</td><td>Guess if the next number is higher or lower</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">headsortails</td><td style="padding-right: 10px;">-</td><td>Simulate a coin toss</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">sudo apt update</td><td style="padding-right: 10px;">-</td><td>Simulate a fake package update</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">message [message]</td><td style="padding-right: 10px;">-</td><td>Send me a direct message, you can only send once everyday so make it count</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">price [power]</td><td style="padding-right: 10px;">-</td><td>Check out current prices for powers</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">latest</td><td style="padding-right: 10px;">-</td><td>Latest power</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">sn [username]</td><td style="padding-right: 10px;">-</td><td>Prices for shortnames</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">open [chat name]</td><td style="padding-right: 10px;">-</td><td>Opens any chat you want</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">online [username]</td><td style="padding-right: 10px;">-</td><td>See if any user is online</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">user [username]</td><td style="padding-right: 10px;">-</td><td>Check all users stats</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">facts</td><td style="padding-right: 10px;">-</td><td>Will tell you facts about me!</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">music [play/next/stop]</td><td style="padding-right: 10px;">-</td><td>Play music ex music play</td></tr>');
	$("#Terminal").append('</table>');

//Onload
NewLine();

//Enter button
$(document).on('keydown', function(e) {
  var x = event.which || event.keyCode;
  if (x === 13 || x == 13) {
    var consoleLine = $('#' + CurrentId + ' input').val();
    var delay = ExecuteLine(consoleLine);
    setTimeout(NewLine, delay);

  }
});
$(document).on('keydown', function(e) {
  var x = event.which || event.keyCode;
  var line = $('#' + CurrentId + ' input');
  var length = line.val().length;
  if (x != 8) {
    line.attr("size", 1 + length);
  } else {
    line.attr("size", length * .95);
  }
  if (length === 0) {
    $('#' + CurrentId + ' input').attr("size", '1');
  }

});
$(document).on('click', function(e) {
  $('#' + CurrentId + ' input').focus();
});

//New line
function NewLine() {
  if (CurrentId !== undefined) {
    $('#' + CurrentId + ' input').prop('disabled', true);
  }
  CurrentId = 'consoleInput-' + GenerateId();
  if (username !== '') {
    $("#Terminal").append('<div class="console-line" id="' + CurrentId + '">' + username + '@' + hostname + ':<span class="terminal-purple">' + folder + ' $</span> <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>');
  } else {
    $("#Terminal").append('The programs included with the XAT GNU/Linux system are free software;<br/>');
    $("#Terminal").append('the exact distribution terms for each program are described in the<br/>');
    $("#Terminal").append('individual files in /usr/share/doc/*/copyright.<br/><br/>');
    $("#Terminal").append('XAT GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent<br/>');
    $("#Terminal").append('permitted by applicable law.<br/><br/>');
    $("#Terminal").append('<div id="' + CurrentId + '">Login as: <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>');
  }
  $('#' + CurrentId + ' input').focus();
  $('#' + CurrentId + ' input').attr("size", '1');
}

// Execute the line
function ExecuteLine(command) {
  $('.console-carrot').remove();
  var CurrentCommand = command.toLowerCase();

  if (username === '') {
    username = CurrentCommand;
    return 500;
  } else {
    //Clear
    if (CurrentCommand == 'clear') {
      $("#Terminal").empty();
    }
    //Logout
    else if (CurrentCommand == 'exit' || CurrentCommand == 'logout') {
      $("#Terminal").empty();
      username = ''
    }
    //Echo
    else if (CurrentCommand.startsWith("echo")) {
      var NewLine = CurrentCommand.replace("echo ", "");
      $("#Terminal").append(NewLine + "<br/>");
    }
    //hostname
    else if (CurrentCommand.startsWith("hostname")) {
      var name = CurrentCommand.replace("hostname ", "");
      if (name !== '') {
        hostname = name;
      }
    }
    //cd
    else if (CurrentCommand.startsWith("cd")) {
      var Address = CurrentCommand.replace("cd ", "").replace(" ", "").replace("//", "");
      if (Address == '/' || Address == '' || Address == 'cd') {
        folder = '~';
      } else {
        folder = Address;
      }
    }
    //help
    else if (CurrentCommand == 'help' || CurrentCommand == '?') {
	$("#Terminal").append('A star (*) next to a name means that the command is disabled.<br/>');
	$("#Terminal").append('<table style="font-family: monospace;">');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">cd [dir]</td><td style="padding-right: 10px;">-</td><td>Change directory</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">clear</td><td style="padding-right: 10px;">-</td><td>Clear console screen</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">echo [arg...]</td><td style="padding-right: 10px;">-</td><td>Echo text back in console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">exit</td><td style="padding-right: 10px;">-</td><td>Logout of console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">logout</td><td style="padding-right: 10px;">-</td><td>Logout of console</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">friends</td><td style="padding-right: 10px;">-</td><td>List your friends</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">chat</td><td style="padding-right: 10px;">-</td><td>Open a chat prompt</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">info</td><td style="padding-right: 10px;">-</td><td>Display user and system information</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">random</td><td style="padding-right: 10px;">-</td><td>Generate a random number</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">hi-lo [up/down]</td><td style="padding-right: 10px;">-</td><td>Guess if the next number is higher or lower</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">headsortails</td><td style="padding-right: 10px;">-</td><td>Simulate a coin toss</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">sudo apt update</td><td style="padding-right: 10px;">-</td><td>Simulate a fake package update</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">message [message]</td><td style="padding-right: 10px;">-</td><td>Send me a direct message, you can only send once everyday so make it count</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">price [power]</td><td style="padding-right: 10px;">-</td><td>Check out current prices for powers</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">latest</td><td style="padding-right: 10px;">-</td><td>Latest power</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">sn [username]</td><td style="padding-right: 10px;">-</td><td>Prices for shortnames</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">open [chat name]</td><td style="padding-right: 10px;">-</td><td>Opens any chat you want</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">online [username]</td><td style="padding-right: 10px;">-</td><td>See if any user is online</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">user [username]</td><td style="padding-right: 10px;">-</td><td>Check all users stats</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">facts</td><td style="padding-right: 10px;">-</td><td>Will tell you facts about me!</td></tr>');
	$("#Terminal").append('<tr><td style="padding-right: 30px;">music [play/next/stop]</td><td style="padding-right: 10px;">-</td><td>Play music ex music play</td></tr>');
	$("#Terminal").append('</table>');
    }
	//facts
	    else if (CurrentCommand === 'facts') {
    const randomFacts = [
        "I'm 19 years old.",
        "I live in Alabama.",
        "I once wrestled a bear and won.",
        "I can solve a Rubik's cube in under 30 seconds.",
        "I have a pet turtle named Turbo.",
        "I’ve climbed Mount Everest twice.",
        "I’m fluent in four languages, including Klingon.",
        "I’ve never had coffee in my life.",
        "I once met Elon Musk at a gas station.",
        "I can juggle five bowling pins at the same time.",
        "I own a collection of over 500 rare coins.",
        "I’ve eaten sushi every day for the past year.",
        "I hold the world record for fastest typing.",
        "I was once on a reality TV show.",
        "I can name all the U.S. presidents in order from memory.",
        "I once hitchhiked across Europe.",
        "I have a photographic memory.",
        "I was voted 'Most Likely to Become Famous' in high school.",
        "I’ve written three unpublished novels.",
        "I can play seven different musical instruments.",
        "I’m a certified scuba diver.",
        "I’ve been to all seven continents.",
        "I was born with an extra toe, but had it removed.",
        "I’ve never broken a bone in my life.",
        "I once won a hotdog eating contest.",
        "I have a black belt in karate.",
        "I’ve acted as an extra in two Hollywood movies.",
        "I’ve caught a fish with my bare hands.",
        "I know how to fly a plane.",
        "I once rode a unicycle for 10 miles straight."
    ];

    // Select a random fact
    const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

    // Display the fact
    $("#Terminal").append(`Fun Fact: ${randomFact}<br/>`);
}

	//User
	else if (CurrentCommand.startsWith('user ')) {
    const username = CurrentCommand.replace('user ', '').trim();
    const apiURL = `https://api.xatstuff.com/userinfo/${username}/powers`;

    if (!username) {
        $("#Terminal").append("Usage: user <username><br/>");
    } else {
        // Fetch user information from the API
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || `User "${username}" not found.`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data.xat) {
                    const { regname, id, nick, avatar, home, MarriedId } = data.xat;
                    const social = data.xatme && data.xatme.social ? data.xatme.social : 'N/A';

                    // Format married/best friend information
                    const marriedInfo = MarriedId ? `Married to ID: ${MarriedId}` : 'Not married or no BFF';

                    // Display user information
                    $("#Terminal").append(`
                        <br/>User Information:<br/>
                        Username: ${regname} (${id})<br/>
                        Nick: ${nick}<br/>
                        Avatar: <a href="${avatar}" target="_blank">${avatar}</a><br/>
                        Home: ${home || 'N/A'}<br/>
                        Social: ${social}<br/>
                        ${marriedInfo}<br/>
                    `);
                } else {
                    $("#Terminal").append(`Error: User "${username}" not found!<br/>`);
                }
            })
            .catch(error => {
                $("#Terminal").append(`Error: ${error.message}<br/>`);
            });
    }
}

	//Open
		else if (CurrentCommand.startsWith('open ')) {
		const chatName = CurrentCommand.replace('open ', '').trim();
		const apiURL = `https://illuxat.com/api/room/${chatName}`;

		if (!chatName) {
			$("#Terminal").append("Usage: open <chat_name><br/>");
		} else {
			// Fetch chat data from the API
			fetch(apiURL)
				.then(response => {
					if (!response.ok) {
						throw new Error(`Chat "${chatName}" not found.`);
					}
					return response.json();
				})
				.then(data => {
					const chatID = data.data.ID; // Extract the chat ID from the API response
					const chatURL = `https://xat.com/embed/chat.php#id=${chatID}`;

					// Check if iframe is already open
					if ($('#helpIframe').length > 0) {
						$("#Terminal").append("Chat is already open.<br/>");
					} else {
						// Append the iframe to the terminal
						$("#Terminal").append(`
							<div id="helpIframeContainer" style="border: 1px solid #444; margin-top: 10px; overflow: hidden;">
								<iframe id="helpIframe" src="${chatURL}" scrolling="no" style="width: 100%; height: 400px; border: none; overflow: hidden;"></iframe>
								<button id="closeHelp" style="margin-top: 5px; padding: 5px; background: #444; color: #fff; border: none; cursor: pointer;">Close Chat</button>
							</div>
						`);

						// Add functionality to close the iframe
						$('#closeHelp').on('click', function () {
							$('#helpIframeContainer').remove();
							$("#Terminal").append("Chat closed.<br/>");
						});
					}
				})
				.catch(error => {
					$("#Terminal").append(`Error: ${error.message}<br/>`);
				});
		}
	}
	// Fetch power price command
	else if (CurrentCommand.startsWith('price ')) {
		const powerName = CurrentCommand.replace('price ', '').trim();
		const apiURL = `https://illuxat.com/api/power/${powerName}`;

		if (!powerName) {
			$("#Terminal").append("Usage: price <power_name><br/>");
		} else {
			// Fetch power price details from the API
			fetch(apiURL)
				.then(response => {
					if (!response.ok) {
						throw new Error(`Power "${powerName}" not found or unavailable.`);
					}
					return response.json();
				})
				.then(data => {
					if (data.code === 200 && data.data) {
						const powerDetails = data.data;
						const { Name, Prices } = powerDetails;

						// Display power price details
						$("#Terminal").append(`
							<br/>Power Details:<br/>
							Name: <strong>${Name}</strong><br/>
							Prices:<br/>
							&nbsp;&nbsp;- Xats: ${Prices.xats || 'N/A'}<br/>
							&nbsp;&nbsp;- Days: ${Prices.days || 'N/A'}<br/>
							&nbsp;&nbsp;- Store: ${Prices.store || 'N/A'}<br/>
						`);
					} else {
						$("#Terminal").append(`Error: Unable to retrieve details for power "${powerName}".<br/>`);
					}
				})
				.catch(error => {
					$("#Terminal").append(`Error: ${error.message}<br/>`);
				});
		}
	}
	//latest
	else if (CurrentCommand === 'latest') {
    const apiURL = 'https://illuxat.com/api/latestpower';

    // Fetch the latest power details
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch the latest power details.');
            }
            return response.json();
        })
        .then(data => {
            if (data.code === 200 && data.data && data.data.latest) {
                const latestPower = data.data.latest;
                const { Id, Name, Status, Prices, Descriptions } = latestPower;

                // Display formatted output
                $("#Terminal").append(`
                    <br/>Latest Power Details:<br/>
                    Name: <strong>${Name}</strong><br/>
                    ID: ${Id}<br/>
                    Status: ${Status}<br/>
                    Store Status: ${latestPower.StoreStatus}<br/>
                    Prices:<br/>
                    &nbsp;&nbsp;- Xats: ${Prices.xats}<br/>
                    &nbsp;&nbsp;- Days: ${Prices.days}<br/>
                    &nbsp;&nbsp;- Store: ${Prices.store}<br/>
                    Description: ${Descriptions.shortDescription}<br/>
                    Long Description: ${Descriptions.longDescription}<br/>
                `);
            } else {
                $("#Terminal").append('Error: Could not retrieve the latest power details.<br/>');
            }
        })
        .catch(error => {
            $("#Terminal").append(`Error: ${error.message}<br/>`);
        });
}

	//shortname
	else if (CurrentCommand.startsWith('sn ')) {
    const username = CurrentCommand.replace('sn ', '').trim();
    const apiURL = `https://illuxat.com/api/shortname/${username}`;

    if (!username) {
        $("#Terminal").append("Usage: sn <shortname><br/>");
    } else {
        // Fetch shortname status from the API
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || `Error checking shortname "${username}".`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data.code === 200) {
                    if (data.data) {
                        // Shortname is available
                        const xats = data.data.xats;
                        $("#Terminal").append(`The shortname "${username}" is available for ${xats} xats.<br/>`);
                    } else {
                        // Shortname is taken
                        const message = data.message || `The shortname "${username}" is already taken.`;
                        $("#Terminal").append(`${message}<br/>`);
                    }
                } else {
                    $("#Terminal").append(`Error: Unable to check the shortname "${username}".<br/>`);
                }
            })
            .catch(error => {
                $("#Terminal").append(`Error: ${error.message}<br/>`);
            });
    }
}

	//onLine
	else if (CurrentCommand.startsWith('online ')) {
    const username = CurrentCommand.replace('online ', '').trim();
    const apiURL = `https://illuxat.com/api/online/${username}`;

    if (!username) {
        $("#Terminal").append("Usage: online <username><br/>");
    } else {
        // Fetch online status from the API
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || `Username "${username}" not found.`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data.code === 200) {
                    const userId = data.data.id;
                    const status = data.data.status;
                    $("#Terminal").append(`${username} (${userId}) is ${status.toLowerCase()}.<br/>`);
                } else {
                    $("#Terminal").append(`Error: Unable to retrieve status for "${username}".<br/>`);
                }
            })
            .catch(error => {
                $("#Terminal").append(`Error: ${error.message}<br/>`);
            });
    }
	}

	//Youtube player
	// Music Play Command
		else if (CurrentCommand === 'music play') {
		  playVideo(); // Calls the function to play video
		  $("#Terminal").append("Playing music...<br/>");
		}
		// Music Stop Command
		else if (CurrentCommand === 'music stop') {
		  stopVideo(); // Calls the function to stop video
		  $("#Terminal").append("Music stopped.<br/>");
		}
		// Music Next Command
		else if (CurrentCommand === 'music next') {
		  playNextVideo(); // Calls the function to play the next video
		  $("#Terminal").append("Playing next music...<br/>");
		}
    //Friends
    else if (CurrentCommand == 'friends' || CurrentCommand == 'friend') {
      $("#Terminal").append('<div>Friends list:</div>');
      $("#Terminal").append('<div>- Wolfie</div>');
      $("#Terminal").append('<div>- Nick</div>');
      $("#Terminal").append('<div>- Reaper</div>');
      $("#Terminal").append('<div>- Updog</div>');
      $("#Terminal").append('<div>- Chica</div>');
      $("#Terminal").append('<div>- Flex</div>');
      $("#Terminal").append('<div>- Rexor</div>');
    }
	// Random Command
    else if (CurrentCommand == 'random') {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
      $("#Terminal").append(`Random Number: ${randomNumber}<br/>`);
    }
    // Heads or Tails Command
    else if (CurrentCommand == 'headsortails') {
      const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
      const result = randomNumber <= 50 ? "Heads" : "Tails"; // Heads for <= 50, Tails otherwise
      $("#Terminal").append(`Result: ${result} (Random Number: ${randomNumber})<br/>`);
    }
    // Hi-Lo Command
    else if (CurrentCommand.startsWith('hi-lo')) {
      const args = CurrentCommand.split(' ');
      if (args.length < 2 || (args[1] !== 'up' && args[1] !== 'down')) {
        $("#Terminal").append("Usage: hi-lo [up/down]<br/>");
      } else {
        const currentNumber = Math.floor(Math.random() * 100) + 1;
        const nextNumber = Math.floor(Math.random() * 100) + 1;
        const guess = args[1];
        const result =
          (guess === 'up' && nextNumber > currentNumber) ||
          (guess === 'down' && nextNumber < currentNumber)
            ? 'Correct'
            : 'Wrong';

        $("#Terminal").append(`Current Number: ${currentNumber}<br/>`);
        $("#Terminal").append(`Next Number: ${nextNumber}<br/>`);
        $("#Terminal").append(`Your Guess: ${guess}<br/>`);
        $("#Terminal").append(`Result: ${result}<br/>`);
      }
    }
	// Add the message command
	else if (CurrentCommand.startsWith('message')) {
		const webhookURL = 'https://discord.com/api/webhooks/1316723146824355870/wnW2tv1pBYpu5grdFyfJFY9F81LfKhhIZ-Oq1dqnKobFHOd0LXDbFd0dnToluuVd0yl7'; // Replace with your webhook URL
		const message = CurrentCommand.replace('message ', '').trim();

		// Get the last sent timestamp from localStorage
		const lastSentTimestamp = localStorage.getItem('lastMessageTimestamp');
		const now = Date.now();

		// Check if 24 hours have passed
		if (lastSentTimestamp && now - parseInt(lastSentTimestamp) < 24 * 60 * 60 * 1000) {
			const timeLeft = ((24 * 60 * 60 * 1000) - (now - parseInt(lastSentTimestamp))) / (60 * 60 * 1000);
			$("#Terminal").append(`You can only send one message every 24 hours. Try again in ${timeLeft.toFixed(2)} hours.<br/>`);
		} else if (!message) {
			$("#Terminal").append("Usage: message <your message><br/>");
		} else {
			// Send the feedback to the Discord webhook
			fetch(webhookURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					content: `Message: ${message}`
				})
			})
			.then(response => {
				if (response.ok) {
					$("#Terminal").append("Message sent successfully!<br/>");
					// Store the current timestamp in localStorage
					localStorage.setItem('lastMessageTimestamp', now.toString());
				} else {
					$("#Terminal").append("Failed to send message.<br/>");
				}
			})
			.catch(error => {
				console.error('Error sending message:', error);
				$("#Terminal").append("An error occurred while sending message.<br/>");
			});
		}
	}

	//Fake Command
	else if (CurrentCommand === 'sudo apt update') {
		const fakeUpdates = [
			"Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease",
			"Hit:2 http://security.ubuntu.com/ubuntu focal-security InRelease",
			"Hit:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease",
			"Hit:4 http://archive.ubuntu.com/ubuntu focal-backports InRelease",
			"Ign:5 http://security.ubuntu.com/ubuntu focal InRelease",
			"Ign:6 http://xat.com/web_gear/chatbox.html focal InRelease",
			"Ign:6 http://xat.me/Sushi focal-security InRelease",
			"Fetched 2,344 kB in 1s (1,728 kB/s)",
			"Reading package lists... Done",
			"Building dependency tree...",
			"Reading state information... Done",
			"All packages are up to date.",
			"4 packages can be upgraded. Run 'apt list --upgradeable' to see them."
		];
		let delay = 0;

		// Display each line of fake updates
		fakeUpdates.forEach((line, index) => {
			setTimeout(() => {
				$("#Terminal").append(line + "<br/>");
				if (index === fakeUpdates.length - 1) {
					$("#Terminal").append("<br/>"); // Add a blank line at the end
				}
			}, delay);
			delay += Math.random() * 800 + 200; // Randomized delay for realism
		});

		return fakeUpdates.length * 1200; // Total duration for the simulation
	}
	//Fake bot
	else if (CurrentCommand === 'python3 xat.py') {
		const initialLogs = [
			"DEBUG - = connection is CONNECTING",
			"DEBUG - > GET /v2 HTTP/1.1",
			"DEBUG - > Host: wss.xatbox.com",
			"DEBUG - > Upgrade: websocket",
			"DEBUG - > Connection: Upgrade",
			"DEBUG - > Origin: https://xat.com",
			"DEBUG - < HTTP/1.1 101 Switching Protocols",
			"INFO - Connected to WebSocket: wss://wss.xatbox.com/v2",
			"INFO - Decoded response: <done />"
		];

		const keepAliveTemplate = [
			"DEBUG - % sending keepalive ping",
			"DEBUG - > PING [binary, 4 bytes]",
			"DEBUG - < PONG [binary, 4 bytes]",
			"DEBUG - % received keepalive pong"
		];

		let isRunning = true;
		let queue = [...initialLogs]; // Start with initial logs

		// Function to get the current timestamp
		function getCurrentTimestamp() {
			const now = new Date();
			return now.toISOString().replace("T", " ").split(".")[0];
		}

		// Function to process the log queue
		function processQueue() {
			if (queue.length === 0 && isRunning) {
				// If queue is empty, add keep-alive messages
				keepAliveTemplate.forEach(line => {
					queue.push(`${getCurrentTimestamp()} - ${line}`);
				});
			}

			if (queue.length > 0) {
				const log = queue.shift();
				$("#Terminal").append(`${getCurrentTimestamp()} - ${log}<br/>`);
				setTimeout(processQueue, 500); // Process next log after 500ms
			}
		}

		// Start processing the queue
		processQueue();

		// Stop the script when a key is pressed
		$(document).on('keydown', function () {
			if (isRunning) {
				isRunning = false;
				queue = []; // Clear the queue
				$("#Terminal").append(`${getCurrentTimestamp()} - Script stopped by user.<br/>`);
			}
		});

		return initialLogs.length * 500; // Estimated initial sequence duration
	}

    //Chat
    else if (CurrentCommand == 'chat') {
      $("#Terminal").append('<div>Mostly on help</div>');
      $("#Terminal").append('<div>Add me /f3693690</div>');
    }
    //Info
    else if (CurrentCommand == 'info') {
      $("#Terminal").append('<div>User: ' + username + '</div>');
      $("#Terminal").append('<div>Hostname: ' + hostname + '</div>');
      $("#Terminal").append('<div>Current folder: ' + folder + '</div>');
    }
    //No command
    else if (CurrentCommand === '') {}
    //Unknown
    else {
      var NewLine = "<div>-bash: " + CurrentCommand + ": command not found </div>";
      $("#Terminal").append(NewLine);
    }
  }
}
//Youtube player
var debounceTimer;
function debouncePlayVideo() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    playVideo();
  }, 300); // Waits 300ms to call playVideo, blocking further calls during this time
}

//Generate id
function GenerateId() {
  return Math.random().toString(16).slice(2)
}
