//ajax请求数据
var Comment=function(){
}
Comment.prototype={
  //实时结算和非实时结算弹出框
  msgAlert:function(msg1,msg2,btn){
    var html="";
    html+='<div class="mark">'+
             '<div class="content">'+
                '<p class="msg1">'+msg1+'</p>'+
                '<p class="msg2">'+msg2+'</p>'+
                '<p class="btn">'+btn+'</p>'+
              '</div>'+
          '</div>'
    $("body").append(html); 
    $(".btn").on("click",function(){
      $(".mark").remove();
    }); 
  },
  //详细信息
  msg:function(tezt){
    var str="";
    str+='<div class="msg">'+
             '<ul class="msg_ul">'+tezt+
             '<p class="pa"><label>关闭</label></p>'+
             '</ul>'+'</div>';
   $("body").append(str); 
   $(".pa").on("click",function(){
    $(".msg").remove();

   });
  },
  //提示错误
  showError:function(ma){
    if($(".po").size()==0){
        var html=$("<p class='po'>"+ma+"</p>");
        $("body").prepend(html);
      }
      var wid = $(".po").width() / 2;
      $(".po").css({
          "marginLeft": -wid + "px"
      });
      setTimeout("$('.po').remove()", 2000);
  },    
}
var comment=new Comment();

// 初始化日期控件
function loadtime(add, time,classname) {
    var currYear = (new Date()).getFullYear();
    var opt = {
        preset: time,
        //日期，可选：date|datetime|time|tree_list|image_text|select  
        theme: 'android-ics light',
        //皮肤样式，可选：default|android|android-ics light|android-ics|ios|jqm|sense-ui|wp light|wp  
        display: 'modal',
        //显示方式 ，可选：modal|inline|bubble|top|bottom  
        mode: 'scroller',
        //日期选择模式，可选：scroller|clickpick|mixed  
        lang: 'zh',
        dateFormat: 'yyyy-mm-dd',
        // 日期格式  
        dateOrder: 'yyyymmdd',
        //面板中日期排列格式  
        dayText: '日',
        monthText: '月',
        yearText: '年',
        //面板中年月日文字  
        showNow: false,
        startYear: currYear-2,
        //开始年份    
        endYear: currYear + 50,
        //结束年份 
        //endYear:2099 //结束年份 
        onSelect: function(valueText) {
            $(classname).show();
        }

    };
    $(add).mobiscroll(opt);
}

//日期
function loadtime_date(id,id_find,time){
   var currYear_date = (new Date()).getFullYear();
   var currDay_date = (new Date()).getDate(); // 获取日  
   console.log(currDay_date);
    $(id).mobiscroll().date({ 
          theme: "android-ics light",  
          lang: "zh",  
          display: 'modal',  
          mode:"scroller",
          dateFormat: time,
          dateOrder:'yyyymmdd',
          startYear:currYear_date-1,
          endYear: currYear_date + 50,
          onSelect: function (valueText, inst) {  
             $(this).find(id_find).val(valueText);
          }
  });
}


// 字符串转换为日期
function strToDate(std) {
    if(std.length==14)
    {
      return std.substr(0,4) + "/" + std.substr(4,2) + "/" + std.substr(6,2) + " " + std.substr(8,2) + ":" + std.substr(10,2) + ":" + std.substr(12,2);
    }
}


//补零
function GetDateStr(AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  if (m < 10) m = "0" + m;
  if (d < 10) d = "0" + d;
  return y + "-" + m + "-" + d;
}