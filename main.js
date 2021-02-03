canvas = document.getElementById("Canvas1");
ctx =canvas.getcontext("2d");

Car1_width = 125;
Car1_height = 75;
car1_img = "Car1.jpg"
Car1_x = 10;
Car1_y =10;

Car2_width = 125;
Car2_height = 75;
ca2_img = "download.jpg"
Car2_x = 10;
Car2_y =10;

background_img ="racing.jpg"


background_img_tag = new Image();
background_img_tag.onload =upload_background;
background_img_tag.src =background_img;

Car1_img_tag = new Image();
car1_img_tag.onload =upload_Car1;
Car1.src =car1_img;

Car2_img_tag = new Image();
car2_img_tag.onload =upload_Car1;
Car2.src =car2_img;

function upload_background(){

    ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}

var key_pressed = e.keyCode;
function upload_Car1(){

    ctx.drawImage(Car1_img,0,0,canvas.width,canvas.height)
}

function upload_Car2(){

    ctx.drawImage(Car2_img,0,0,canvas.width,canvas.height)
}

window.addEventListener("keydown",keydown1);

function keydown1(e){

    if (key_pressed =='38'){

        Car1_up();
          console.log("Up")
    }
  
    if (key_pressed =='39'){

        Car1_right();
          console.log("Right")
    }
    if (key_pressed =='37'){

        Car1_left();
          console.log("Left")
    }

    if (key_pressed =='40'){

        Car1_down();
          console.log("Down")
    }
    if(key_pressed =='87'){
        car2_up();
        console.log( "Up")
    }
    if(key_pressed =='65'){

        car2_right();
        console.log("Right");
    }
    if(key_pressed=='83'){

        car2_left();
        console.log("Left");
    }
    if(key_pressed=='68'){

        car2_down();
        console.log("Down")
    }
}

