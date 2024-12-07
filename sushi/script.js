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
    $("#Terminal").append('Welcome to XAT SUSHI console<br/>');
    $("#Terminal").append('The programs included in this XAT GUI are free to use, but there’s no warranty if you break something!<br/>');
    $("#Terminal").append('Proceed with caution—or dont, we really dont care.<br/><br/>');
	//$("#Terminal").append('Type help to see available commands!<br/><br/>');
    $("#Terminal").append('XAT GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent<br/>');
    $("#Terminal").append('permitted by applicable law.<br/><br/>');
 
	//help commands
	$("#Terminal").append('Welcome to xatspace, version 1.69 (fun-unknown-cool-xatpro)<br/>');
	$("#Terminal").append('Explore the commands below to unlock the secrets of this profile.<br/><br/>');
	$("#Terminal").append('A star (*) next to a name means that the command is disabled.<br/>');
	$("#Terminal").append('cd [dir] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change directory<br/>');
	$("#Terminal").append('clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Clear console screen<br/>');
	$("#Terminal").append('echo [arg...] &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Echo text back in console<br/>');
	$("#Terminal").append('exit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of console<br/>');
	$("#Terminal").append('logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of console<br/>');
	$("#Terminal").append('friends &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; List your friends<br/>');
	$("#Terminal").append('chat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open a chat prompt<br/>');
	$("#Terminal").append('info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display user and system information<br/>');


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
	  $("#Terminal").append('Welcome to xatspace, version 1.69 (fun-unknown-cool-xatpro)<br/>');
	  $("#Terminal").append('Explore the commands below to unlock the secrets of this profile.<br/><br/>');
      $("#Terminal").append('A star (*) next to a name means that the command is disabled.<br/>');
      $("#Terminal").append('cd [dir] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change directory<br/>');
      $("#Terminal").append('clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Clear console screen<br/>');
      $("#Terminal").append('echo [arg...] &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Echo text back in console<br/>');
      $("#Terminal").append('exit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of console<br/>');
      $("#Terminal").append('host &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get Help about command<br/>');
      $("#Terminal").append('hostname [arg..]&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change hostname<br/>');
      $("#Terminal").append('logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of console<br/>');
      $("#Terminal").append('friends &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; List your friends<br/>');
      $("#Terminal").append('chat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open a chat prompt<br/>');
      $("#Terminal").append('info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Display user and system information<br/>');
    }
    //Friends
    else if (CurrentCommand == 'friends' || CurrentCommand == 'friend') {
      $("#Terminal").append('<div>Friends list:</div>');
      $("#Terminal").append('<div>- Wolfie</div>');
      $("#Terminal").append('<div>- Nick</div>');
      $("#Terminal").append('<div>- Reaper</div>');
	  $("#Terminal").append('<div>- Chica</div>');
	  $("#Terminal").append('<div>- Flex</div>');
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
