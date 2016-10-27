
function calender_job() {


  var nx=1;
  var c=0;
  var today,d,fst,fst_week,last,lastday;
function promiss(){
  today = new Date();
  d = today.getDate();
  fst = new Date(today.getFullYear(), today.getMonth()+nx-1, 1);

  fst_week = fst.getDay();
  last = new Date(today.getFullYear(),today.getMonth() +nx,0);
  lastday = last.getDate();	
}
promiss();
  var s=(lastday + fst_week - 1>34)?6:5;
  function calemder_wkwk(){

$('#calendar_month').html(
'<tr id="weekday">	   <td class="weekdays"><div class="wd">日</div></td>'
			   +'<td class="weekdays"><div class="wd">月</div></td>'
			   +'<td class="weekdays"><div class="wd">火</div></td>'
			   +'<td class="weekdays"><div class="wd">水</div></td>'
			   +'<td class="weekdays"><div class="wd">木</div></td>'
			   +'<td class="weekdays"><div class="wd">金</div></td>'
			   +'<td class="weekdays"><div class="wd">土</div></td></tr>'
);

for(var i=0;i<s;i++){
$('#calendar_month').append(
'<tr class="calendar_week"> <td class="calendar_day">'
+' <div class="calendar_day_top"> </div> <div class="calendar_day_under">'
+' </div> </td>'
+'<td class="calendar_day"> <div class="calendar_day_top">'
+' </div> <div class="calendar_day_under"> </div> </td>'
+' <td class="calendar_day"> <div class="calendar_day_top">'
+' </div> <div class="calendar_day_under"> </div> </td>'
+'  <td class="calendar_day"> <div class="calendar_day_top"> </div>'
+' <div class="calendar_day_under"> </div> </td>'
+'<td class="calendar_day"> <div class="calendar_day_top"> '
+'</div> <div class="calendar_day_under"> </div> </td>'
+' <td class="calendar_day"> <div class="calendar_day_top"> </div> <div class="calendar_day_under"> </div> </td>			   <td class="calendar_day"> <div class="calendar_day_top"> </div> <div class="calendar_day_under"> </div> </td> </tr>'

);
}

}
calemder_wkwk();

  function calender_jobjob(){
  
  $(".calendar_day_top").each(function(idx, e) {
    var a = idx - fst_week + 1;
	if(d + fst_week - 1==idx && c==0){
	$(e).css("background","#aff");
	}else{
	$(e).css("background","#ffc");
	}
    $(this).html(a > 0 && a <= lastday ? a : "");
  });

 
  $("#topMonth").html(today.getFullYear() + "年" + (today.getMonth()+nx) + "月");
 // alert(lastday);
 
 
  
 }
calender_jobjob();

$("#next_month_button").click(function(){
  nx += 1;
  c += 1;
  promiss();
  s=(lastday + fst_week - 1>34)?6:5;
  calemder_wkwk();
calender_jobjob();
});

$("#last_month_button").click(function(){
  nx -= 1;
  c -= 1;
  promiss();
  s=(lastday + fst_week - 1>34)?6:5;
  calemder_wkwk();
calender_jobjob();
});

$("#today_button").click(function(){
  nx = 1;
  c = 0;
  promiss();
  s=(lastday + fst_week - 1>34)?6:5;

  calemder_wkwk();
calender_jobjob();
});







}



$(function() {;
  calender_job();
});