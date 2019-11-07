var isLoginVisible = false;
var isRegisterVisible = false;
const imgCard = ["imgCard1", "imgCard2", "imgCard3", "imgCard4"];

$(".openLogin").click(function(e) {
  if (!isLoginVisible && !isRegisterVisible) {
    $(".all").css("filter", "blur(2px)");
    showWindow(".login", "block");
    isLoginVisible = true;
  }
});
$(".close1").click(function(e) {
  if (isLoginVisible) {
    $(".all").css("filter", "blur(0px)");
    showWindow(".login", "none");
    isLoginVisible = false;
  }
  e.preventDefault();
});
//register button
$(".registerButton").click(function(e) {
  if (!isLoginVisible && !isRegisterVisible) {
    showWindow(".register", "block");
    $(".all").css("filter", "blur(2px)");
    isRegisterVisible = true;
  }
  e.preventDefault();
});
$(".close2").click(function(e) {
  if (isRegisterVisible) {
    $(".all").css("filter", "blur(0px)");
    $(".all").css("filter", "blur(0px)");
    showWindow(".register", "none");
    isRegisterVisible = false;
  }
  e.preventDefault();
});

function showWindow(element, display) {
  $(element).css("display", display);
}
