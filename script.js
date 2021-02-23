$(document).ready(function() {
  var colors = ["#080808",
  "#101010",
  "#181818",
  "#202020",
  "#282828",
  "#303030",
  "#383838",
  "#404040",
  "#484848",
  "#505050",
  "#585858",
  "#606060",
  "#686868",
  "#707070",
  "#787878",
  "#808080",
  "#888888",
  "#909090",
  "#989898",
  "#A0A0A0",
  "#A8A8A8",
  "#B0B0B0",
  "#B8B8B8",
  "#C0C0C0",
  "#C8C8C8",
  "#D0D0D0",
  "#D8D8D8",
  "#E0E0E0",
  "#E8E8E8",
  "#F0F0F0",
  "#F8F8F8",
  "#FFFFFF"];

        $(".one").each(function(index) {
          // var w=Math.floor(Math.random() * 400) + 30;
          // var h=Math.floor(Math.random() * 400) + 100;
          var marginR=Math.floor(Math.random() * 10) + 3;
          var marginL=Math.floor(Math.random() * 10) + 3;
          var i= Math.floor(Math.random()*colors.length);
          // "background-color":"rgb(" + colorR + "," + colorG + "," + colorB + ")"
          var colorR = Math.floor((Math.random() * 256));
          var colorG = Math.floor((Math.random() * 256));
          var colorB = Math.floor((Math.random() * 256));

          $(this).css({
            "margin-right": marginR+"px", 
            "margin-left": marginL+"px",  
            "background-color": colors[i]
          });
          $( this )
          .mouseover(function() {
            $( this ).css("background-color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
          })
      
        });
    
})