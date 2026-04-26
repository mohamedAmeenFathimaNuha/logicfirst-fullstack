let User1={
    name:'Ramya',
    age:35,
    login(){
        console.log("You are login");
    },

    logout(){
        console.log("You are log out");
    }

}
let User2={
    name:'Vasanth',
    age:25,
    login(){
        console.log("You are login");
    },

    logout(){
        console.log("You are log out");
    }

}
let User3={
name:'Jhon',
    age:21,
    login(){
        console.log("Hi",this.name);
        console.log("You are login");
    },

    logout(){
        console.log("You are log out");
    }

}

class User{
    static numberOfUser=0;

    constructor(name,age){
        this.name=name;
        this.age=age;
        numberOfUser++;

    }
    login(){
        console.log('Hi',this.name)
        console.log('You are Logged in')
    }
    Logout(){
        console.log('You are Logged out')
    }
    static displayTotalusers(){
        console.log('Total number of User '+User.numberOfUser++);
    }
}
let userOne=new User('Vidya',21);
let useTwo=new User('Ranesh',33);
let userThree=new User('Mano',32);

console.log('Number of User',User.numberOfUSer)
User.displayTotalUser()
User1.Login()
User2.logout()

let movie=new String('ARR')

class paidUSer extends User{
    message(){
        console.log('You have 100GB free Storage');
    }
}
let paidUser1=new PaidUser('Dhana',22)

paidUser1.login(){
userOne.meesage()
paidUser1.message()

    Constructor (name,age){
    // this.name=name;
    // this.age=age;
    super(name,age);
    this.storage=100;
    }

    login(){
        console.log('Thank you for you Support...')
    
    return this
}

}
paidUser1.Login().message();

// in console
// let arr=[2,3,4]
// arrprototype have yes
// userOne
//userOne.toString()

