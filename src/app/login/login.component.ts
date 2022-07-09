import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""
  // database:any ={
  //   1000:{acno:1000,uname:"yrue" , password:1000},
  //   1001:{acno:1001,uname:"true" , password:1001},
  //   1002:{acno:1002,uname:"rrue" , password:1002},
  //   1003:{acno:1003,uname:"arue" , password:1003}
  // }
  constructor( private  router: Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // // account change
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)  
  // }
  // // password change
  // pswdChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }

 login(){
  var acno=this.acno
  var pswd=this.pswd
  let database=this.ds.database

 if(acno in database){
  if(pswd==database[acno]["password"]){
    alert("login success")
    this.router.navigateByUrl("dashboard")
  }
  else{
    alert("incoreect password")
  }
  
 }
 else{
  alert("user doesnt exists")
}
 }
}
