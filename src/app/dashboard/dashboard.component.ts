import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

pswd=""
acno=""
amount=""

pswd1=""
acno1=""
amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    alert("deposit success")
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount +"succesfully deposited")
      alert("Avaialable balance is " + result)
    }

  }
  withdraw(){
    alert("withdraw success")
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    const result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount +"succesfully deposited")
      alert("Avaialable balance is " + result)
    }

  }
}
