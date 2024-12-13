$(document).ready((e) => {
  const mainIcon =
    "https://xatimg.com/image/u6GsF2EB4PP7.jpg";
  const username = "Mikay";
  const profileDescription = "(505050505)";
  const profileLove = "Wolfie❤️";
  const profileLink = "";

  $("#profile").show();
  $(".profile-icon").attr("src", mainIcon);
  $(".usernameText").text(username);
  $(".descriptionText").text(profileDescription);
  $(".loveText").text(profileLove);
  $(".profileLink").attr("href", profileLink);
  $(".profileLink").text(profileLink);

  $("[target]").click((a) => {
    const target = $(a.currentTarget).attr("target");
    $(".page-hidden").hide();
    $("#" + target).toggle();

    if (target.includes("story")) $("#top-menu-bar").hide();
    else $("#top-menu-bar").show();
  });
});