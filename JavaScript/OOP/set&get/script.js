function user(name,age){
    this.name=name;
    this.age=age;

    //in this funtion not have prototype
    this.login=function(){
        crossOriginIsolated.log("You are Logged in")
    },

    //in this function have prototype
    user.prototype.login1 = function(){
              console.log('hi',this.name)
    }
}
let user1=new user('abdul',34)
user1.login()




class Temperature{
      construtor(temp){
        // this.temp=temp
        this._temp=temp

      }
    get temp(){
        return this.temp;
        //return this._temp;

        //chnage this next
       // return '${this._temp} deg celcius
    }
    set temp(temp){
        if(temp>100){
            temp=100;
            this._temp=temp
        }
    }
}
let temp1=new Temperature(25);
temp1.temp=150
temp1.temp=150
console.log(temp1.temp)
console.log(temp1._temp)