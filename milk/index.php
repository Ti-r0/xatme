<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Milk</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, rgba(255, 110, 196, 0.8), rgba(120, 115, 245, 0.8)), url('https://xatimg.com/image/evHp9s9plunf.jpg');
            background-size: cover;
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .profile-card {
            width: 420px;
            height: 600px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            position: relative;
        }

        .background {
            position: relative;
            height: 150px;
            background: url('banner.png') no-repeat center center;
            background-size: cover;
        }

        .profile-picture {
            position: absolute;
            top: 110px;
            left: 20px;
            width: 80px;
            height: 80px;
            border: 5px solid rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.9);
        }

        .profile-picture img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .status-icon {
            position: absolute;
            top: 150px;
            left: 75px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #43b581;
            border: 2px solid #fff;
        }

        .profile-info {
            text-align: center;
            padding-top: 85px;
            padding-bottom: 20px;
            background-color: rgba(255, 255, 255, 0.9);
            color: #333;
        }

        .profile-info h1 {
            margin: 0;
            font-size: 24px;
            color: #333;
        }

        .profile-info p {
            margin: 5px 0;
            font-size: 14px;
            color: #555;
        }

        .roles {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
            margin: 10px 0;
        }

        .role {
            padding: 2px 8px;
            border-radius: 5px;
            font-size: 12px;
            color: #fff;
        }

        .role.crew {
            background-color: #f1c40f;
        }

        .role.halo {
            background-color: #43b581;
        }

        .role.admin {
            background-color: #f04747;
        }

        .role.bots {
            background-color: #7289da;
        }

        .role.kay {
            background-color: #a643b7;
        }

        .role.booster {
            background-color: #ff73fa;
        }

        .tabs {
            display: flex;
            justify-content: space-around;
            background-color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid #ddd;
        }

        .tab-link {
            padding: 10px;
            flex: 1;
            text-align: center;
            background-color: transparent;
            border: none;
            color: #333;
            cursor: pointer;
            font-size: 14px;
            position: relative;
        }

        .tab-link.active {
            color: #000;
        }

        .tab-link.active::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #000;
        }

        .tab-content {
            display: none;
            padding: 10px;
        }

        .tab-content.active {
            display: block;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 200px;
            overflow-y: auto;
        }

        ul li {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            border-bottom: 1px solid #ddd;
            color: #333;
            cursor: pointer;
        }

        ul li a {
            color: #333;
            text-decoration: none;
            width: 100%;
            text-align: left;
        }

        ul li:hover {
            background-color: #f0f0f0;
        }

        .connections a {
            color: #7289da;
            text-decoration: none;
        }

        .connections a:hover {
            text-decoration: underline;
        }

        .bio {
            margin: 10px 0;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 5px;
            color: #333;
        }

        /* Custom scrollbar for friends list */
        ul::-webkit-scrollbar {
            width: 6px;
        }

        ul::-webkit-scrollbar-thumb {
            background-color: #a9957b;
            border-radius: 10px;
        }

        ul::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
    </style>
</head>

<body>
    <div class="profile-card">
        <div class="background"></div>
        <div class="profile-picture">
            <img src="profile.jpg" alt="Profile Picture">
            <div class="status-icon"></div>
        </div>
        <div class="profile-info">
            <h1>milk</h1>
            <p>(175000931)</p>
            <div class="roles">
                <span class="role crew">Nub</span>
                <span class="role admin">Canadian</span>
                <span class="role bots">Bot</span>
                <span class="role kay">Milk</span>
                <span class="role booster">Server Booster</span>
            </div>
            <div class="tabs">
                <button class="tab-link active" onclick="openTab(event, 'about')">About Me</button>
                <button class="tab-link" onclick="openTab(event, 'friends')">7 Mutual Friends</button>
                <button class="tab-link" onclick="openTab(event, 'servers')">2 Mutual Servers</button>
            </div>
            <div id="about" class="tab-content active">
                <div class="bio">
                    <p>I don't care. I literally can't even.</p>
                </div>
                <p>cinnamoroll enthusiast.</p>
				<img src="https://xatimg.com/image/VM98fS7wk12X.gif" alt="gif" width="100">
            </div>
            <div id="friends" class="tab-content">
                <ul>
                    <li><a href="https://xat.me/royalty">Leia</a></li>
                    <li><a href="https://xat.me/seven">Seven</a></li>
                    <li><a href="https://xat.me/marie">Marie</a></li>
                    <li><a href="https://xat.me/princess">Bonnie</a></li>
                    <li><a href="https://xat.me/vowelmovement">g1rl</a></li>
                    <li><a href="https://xat.me/nature">mia</a></li>
                    <li><a href="https://xat.me/david">david</a></li>
                    <li><a href="https://xat.me/sergio">sergio</a></li>
                </ul>
            </div>
            <div id="servers" class="tab-content">
                <ul>
                    <li><a href="https://xat.com/help"><img src="https://xat.com/content/web/R00179//img/navbar/help.svg" alt="Help"> Help</li></a>
                    <li><a href="https://xat.com/trade"><img src="https://xat.com/content/web/R00179//img/navbar/trade.svg" alt="Trade"> Trade</li></a>
                </ul>
            </div>
        </div>
    </div>

    <script>
        function openTab(event, tabName) {
            var i, tabcontent, tablinks;

            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Remove "active" class from all tab links
            tablinks = document.getElementsByClassName("tab-link");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                tablinks[i].classList.remove('active');
            }

            // Show the current tab and add "active" class to the clicked tab link
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.classList.add('active');
        }

        // Display the first tab by default
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".tab-content").style.display = "block";
            document.querySelector(".tab-link").className += " active";
        });
    </script>
</body>

</html>
