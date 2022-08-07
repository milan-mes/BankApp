import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner"
  accnum="Account number please!!"
  acno=""
  psw=""

  // database 
  database:any={
    1000:{acno:1000,unname:"milan",password:1000,balance:2000},
    1001:{acno:1001,unname:"mila",password:1001,balance:3000},
    10002:{acno:1002,unname:"mil",password:1002,balance:4000}
  }
// router -variable name 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // login(){
  //   alert("Login Clicked")
    
  // }

  // acnochange(event:any){
  //   this.acno=event.target. value
  //   // console.log(this.acno);
    
    
  // }
  // changepsw(event:any){
  //   this.psw=event.target.value

  //   console.log(this.psw)
    
  // }

  // login using template referencing variable
  // two way binding

// login(a:any,b:any){

//   console.log(a.value);
  

//   // user enterd acno n pswd
//   var acno =a.value
//   var psw=b.value
//   // console.log(psw);
login(){

  var acno=this.acno
  var psw=this.psw
  console.log(acno);
  

  let database=this.database

  if(acno in database){

    if(psw==database[acno]["password"]){
     
    alert("login successfully")

  
    this.router.navigateByUrl("dashboard")


    }
    else{
      alert("invalid pswd")
    }

  }
  else{
    alert("user does not exist")
  }

}


}
