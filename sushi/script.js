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
	$("#Terminal").append('<tr><td style="padding-right: 30px;">message <message></td><td style="padding-right: 10px;">-</td><td>Send me a direct message, you can only send once everyday so make it count</td></tr>');
	$("#Terminal").append('</table>');
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


//Generate id
function GenerateId() {
  return Math.random().toString(16).slice(2)
}
