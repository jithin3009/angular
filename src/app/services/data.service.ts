import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database: any = {
    1000: { acno: 1000, uname: "yrue", password: 1000, balance: 0 },
       1001: { acno: 1001, uname: "true", password: 1001, balance: 0 },

       1002: { acno: 1002, uname: "rrue", password: 1002, balance: 0 },
    1003: { acno: 1003, uname: "arue", password: 1003, balance: 0 }
  }

  constructor() { }
  //register
  register(acno: any, password: any, uname: any, balance: any) {

    let database = this.database

    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance

      }
      return true
    }
  }

  //deposit
  deposit(acno: any, password: any, amt: any) {
    let database = this.database

    if (acno in database) {
      if (password == database[acno]["password"]) {
        database[acno]["balance"] = database[acno]["balance"] + amt
        return true
      } else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user doesnt exists")
      return false
    }
  }

  //withdraw
   withdraw(acno: any, password: any, amt: any) {
    let database = this.database
     if (acno in database) {
       if (password == database[acno]["password"]) {
        database[acno]["balance"] = database[acno]["balance"] - amt
        return true
       } else {
        alert("incorrect password")
        return false
       }
     }
     else {
       alert("user doesnt exists")
       return false
     }
   }
 }
