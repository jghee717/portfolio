var $careNum = 0;
var $theSize = 3;

$(".menu-left ul").hide();
$(".menu-left ul").eq(0).show();
$(".menu-left .prev").click(function() {
  $careNum--;
  if ($careNum < 0) $careNum = $theSize - 1;
  $(".menu-left ul").hide();
  $(".menu-left ul").eq($careNum).show();
});

$(".control .next").click(function() {
  $careNum++;
  if ($careNum >= $theSize) $careNum = 0;
  $(this).parent().children("ul");
  $(".menu-left ul").hide();
  $(".menu-left ul").eq($careNum).show();
});

//qpet
$(".menu-left2 ul").hide();
$(".menu-left2 ul").eq(0).show();
$(".menu-left2 .prev").click(function() {
  $careNum--;
  if ($careNum < 0) $careNum = $theSize - 1;
  $(".menu-left2 ul").hide();
  $(".menu-left2 ul").eq($careNum).show();
});

$(".control2 .next").click(function() {
  $careNum++;
  if ($careNum >= $theSize) $careNum = 0;
  $(this).parent().children("ul");
  $(".menu-left2 ul").hide();
  $(".menu-left2 ul").eq($careNum).show();
});

//ChkHeat
$(".menu-left3 ul").hide();
$(".menu-left3 ul").eq(0).show();
$(".menu-left3 .prev").click(function() {
  $careNum--;
  if ($careNum < 0) $careNum = $theSize - 1;
  $(".menu-left3 ul").hide();
  $(".menu-left3 ul").eq($careNum).show();
});

$(".control3 .next").click(function() {
  $careNum++;
  if ($careNum >= $theSize) $careNum = 0;
  $(this).parent().children("ul");
  $(".menu-left3 ul").hide();
  $(".menu-left3 ul").eq($careNum).show();
});

//ProductOrder
$(".menu-left4 ul").hide();
$(".menu-left4 ul").eq(0).show();
$(".menu-left4 .prev").click(function() {
  $careNum--;
  if ($careNum < 0) $careNum = $theSize - 1;
  $(".menu-left4 ul").hide();
  $(".menu-left4 ul").eq($careNum).show();
});

$(".control4 .next").click(function() {
  $careNum++;
  if ($careNum >= $theSize) $careNum = 0;
  $(this).parent().children("ul");
  $(".menu-left4 ul").hide();
  $(".menu-left4 ul").eq($careNum).show();
});
