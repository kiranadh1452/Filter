var img ;
var canvas2 = document.getElementById("d2");
var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas2.toDataURL('image/png');
    button.href = dataURL;
});
function upload(){
  var canvas1 = document.getElementById("d1");
  var data = document.getElementById("name");
  img = new SimpleImage(data);
  img.drawTo(canvas1);
}
function makeGray(){var gimg = img ;
  for( var pix of gimg.values()){
     var x = (pix.getRed()+pix.getGreen()+pix.getBlue())/3;
     pix.setRed(x);
     pix.setGreen(x);
     pix.setBlue(x);
  }
  gimg.drawTo(canvas2); gimg = null ; upload();
}
function Blur(){ var img1 = img ; clr("d2");var x,y,r,g,b,c ;
 for (var pix of img1.values()){
        var px = pix.getX();
        var py = pix.getY();
        x = px -1 ;
	r=g=b=c=0;
        while(x <= px+1){
            y=py-1;
            while(y<=py+1){
                if( x>=0 && y>=0 && x<=img1.getWidth()-1 && y<=img1.getHeight()-1 ) {
                    var bp = img1.getPixel(x,y) ; c++
		    r = r + bp.getRed();
		    g = g + bp.getGreen();
		    b = b + bp.getBlue();
                } y=y+1;
            } x=x+1;
        }
       pix.setRed(r/c) ; pix.setGreen(g/c); pix.setBlue(b/c);
 }
 img1.drawTo(canvas2) ; img1 = null ; upload() ;
}

function clr(x){
 var canvas = document.getElementById(x);
 var con = canvas.getContext("2d");
 con.clearRect(0,0,canvas.width,canvas.height);
}

function reset(){ clr("d2"); }

function makeStripe(){var simg = img ; clr("d2");
 for(var pix of simg.values()){var ps = pix.getX();
    if( (ps<=simg.getWidth()/3)) {
        pix.setRed(255);
    }
    else if (ps<= 2*simg.getWidth()/3){
        pix.setGreen(255);
    }
    else{
        pix.setBlue(255);
    }
  }
 simg.drawTo(canvas2); simg = null ; upload();
}

function makeRed(){ var rimg = img ; clr("d2");
  for( var pix of rimg.values()){
     var x = (pix.getRed()+pix.getGreen()+pix.getBlue())/3;
     if(x < 128){
     	pix.setRed(2*x);
     	pix.setGreen(0);
     	pix.setBlue(0);
		}
     else{
         pix.setRed(254);
	 pix.setGreen(x);
	 pix.setBlue(x);
     }
  }
  rimg.drawTo(canvas2); rimg = null ; upload();
}
function Rom(){ var Rimg = img ; clr("d2");
  for( var pix of Rimg.values()){
     var x = (pix.getRed()+pix.getGreen()+pix.getBlue())/3;
     if(x < 128){
     	pix.setRed(2*x);		}
     else{
         pix.setRed(254);
     }
  }
  img.drawTo(canvas2); Rimg = null ; upload();
}

function makeGreen(){ var Rimg = img ; clr("d2");
  for( var pix of Rimg.values()){
     var x = (pix.getRed()+pix.getGreen()+pix.getBlue())/3;
     if(x < 128){
     	pix.setGreen(2*x);		}
     else{
         pix.setGreen(254);
     }
  }
  img.drawTo(canvas2); Rimg = null ; upload();
}

function Alur(){var simg = img ; clr("d2");
 for(var pix of simg.values()){var ps = pix.getX();
    if( (ps<=simg.getWidth()/6) || ((ps > 2*simg.getWidth()/6) && (ps <=3*simg.getWidth()/6)) || ((ps > 4*simg.getWidth()/6) && (ps <=5*simg.getWidth()/6))) {
        pix.setRed(255);
    }
  }
 simg.drawTo(canvas2); simg = null ; upload();
}
function rainbow(){
var img1 = img ; clr("d2");
for (var pix of img1.values()){ var h = img1.getHeight(); var y= pix.getY();
    avg = (pix.getRed() + pix.getGreen() + pix.getBlue() )/3;
    if(y < h/7){
        pix.setRed(decide( 235 ,avg));
        pix.setGreen(decide( 9,avg));
        pix.setBlue(decide( 9,avg));
    }
    else if(y < 2*h/7){
        pix.setRed(decide( 232,avg));
        pix.setGreen(decide(116 ,avg));
        pix.setBlue(decide( 14,avg));
    }
        else if(y < 3*h/7){
        pix.setRed(decide(251 ,avg));
        pix.setGreen(decide(255 ,avg));
        pix.setBlue(decide( 28,avg));
    }
        else if(y < 4*h/7){
        pix.setRed(decide(17 ,avg));
        pix.setGreen(decide(242 ,avg));
        pix.setBlue(decide(5,avg));
    }
        else if(y < 5*h/7){
        pix.setRed(decide(  8,avg));
        pix.setGreen(decide( 25 ,avg));
        pix.setBlue(decide( 135 ,avg));
    }
        else if(y < 6*h/7){
        pix.setRed(decide( 75 ,avg));
        pix.setGreen(decide( 2 ,avg));
        pix.setBlue(decide( 130 ,avg));
    }
        else {
        pix.setRed(decide(  127,avg));
        pix.setGreen(decide( 2 ,avg));
        pix.setBlue(decide( 255 ,avg));
    }
}
 img1.drawTo(canvas2) ; img1 = null ; upload() ;

function decide( val , avg ){ var data ;
    if(avg<128) { data = newl(val,avg); }
    else { data = newh(val,avg); }
    return data ;
}

function newl( val , avg){
    return( (val/127.5)*avg) ;
}
function newh( val , avg){
    return((((255-val)/127.5)*avg)+((2*val)-255));
}
}
