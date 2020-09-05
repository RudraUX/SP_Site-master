$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
//smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
//login and signup--------------------------------------------------------------------------------------
function toggle1(){
  var blur=document.getElementById('blur');
  blur.classList.toggle('active');
  var popup=document.getElementById('popup');
  popup.classList.toggle('active');
  }
function change1(){
  var popup_again=document.getElementById('popup');
  popup_again.classList.toggle('active');
  var clos=document.getElementById('close_this');
  clos.classList.toggle('active');
}
