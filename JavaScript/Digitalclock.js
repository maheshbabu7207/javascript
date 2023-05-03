function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM"
    if(hh>12)
    {
        am_pm="Pm"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${ss} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime
    if(mo==0)
    {
        mo="jan"
    }
    else if(mo==1)
    {
        mo="feb"
    }
    else if(mo==2)
    {
        mo="mar"
    }
    else if(mo==3)
    {
        mo="apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(m0==5)
    {
        mo="jun"
    }
    else if(mo==6)
    {
        mo="jul"
    }
    else if(m0==7)
    {
        mo="aug"
    }
    else if(mo==8)
    {
        mo="sep"
    }
    else if(mo==9)
    {
        mo="oct"
    }
    else if(mo==10)
    {
        mo="nov"
    }
    else if(mo==11)
    {
        mo="dec"
    }
    var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("date").innerHTML=fulldate

 switch(4)
 {
    case 0:
        day="Sunday"
        document.body.style.backgroundImage="url(pexe.jpg)"
        break;
    case 1:
         day="Monday"
         document.body.style.backgroundImage="url(pexe.jpg)"
         break;
   case 2:
         day="Tuseday"
         document.body.style.backgroundImage="url(pexe.jpg)"
         break;
   case 3:
         day="Wendsday"
         document.body.style.backgroundImage="url(pexe.jpg)"
         break;
    case 4:
         day="Thusday"
         document.body.style.backgroundImage="url(pexe.jpg)"
         break; 
     case 5:
         day="Fridayday"
         document.body.style.backgroundImage="url(pexe.jpg)"
         break;
     case 6:
          day="Saturday"
          document.body.style.backgroundImage="url(pexe.jpg)"
          break;         
   }
   document.getElementById("day").innerHTML=day;
   document.getElementById("sec").innerHTML=ss;
   var updateTheTime=setTimeout(clock,1000)
}
  function greet()
  {
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("msg").innerHTML="Good Morning"
        document.getElementById("bgvid").src=""
    }
    else if(hh>12 && hh<15)
    {
        document.getElementById("msg").innerHTML="Good Afternoon"
        document.getElementById("bgvid").src=""
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="-100px"
    }
    else if(hh>16 && hh<19)
    {
        document.getElementById("msg").innerHTML="Good Evening"
        document.getElementById("bgvid").src=""
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="-100px"
    }
    else 
    {
        document.getElementById("msg").innerHTML="Good Night"
        document.getElementById("bgvid").src=""
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="-100px"
    }
  }
  greet()
  function closewind()
  {
    document.getElementById("greet").style.display="none"
  }
  var a=setTimeout(closewind);
