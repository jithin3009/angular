import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno = ""
  uname = ""
  pswd = ""
  balance=""

  constructor(private ds: DataService,private router :Router) { }

  ngOnInit(): void {
  }

  register() {
    alert("registered")
    var acno = this.acno
    var pswd = this.pswd
    var uname = this.uname
    var balance=this.balance

    const result = this.ds.register(acno, pswd, uname,balance)
   if(result){
    alert("succesfully registered")
    this.router.navigateByUrl("")
  }
  else{
    alert("user already exists")
  }
  }
}
