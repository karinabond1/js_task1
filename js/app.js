function calcClass(){
    this.a=0;
    this.b=0;
    this.result=0;
    this.setA = function(a){
        this.a = a;
    }
    this.setB = function(b){
        this.b = b;
    }
    this.plus = function(){
        this.result = this.a + this.b;
    }
    this.minus = function(){
        this.result = this.a - this.b;
    }
    this.mult = function(){
        this.result = this.a * this.b;
    }
    this.devision = function(){
        this.result = this.a / this.b;
    }
    this.show = function (){
        console.log(this.result);
    }
}
var calculater = new calcClass();
calculater.setA(4);
calculater.setB(2);
calculater.plus();
calculater.show();
calculater.minus();
calculater.show();
calculater.mult();
calculater.show();
calculater.devision();
calculater.show();
