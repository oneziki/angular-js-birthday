import { Component } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  template: `
    <input #newUser
      (keyup.enter)="addUser(newUser.value)"
      (blur)="addUser(newUser.value); newUser.value='' ">

    <button (click)="addUser(newUser.value)">Add</button>

    <ul><li *ngFor="let User of Users">{{User}}</li></ul>
  `
})
export class LittleTourComponent {
  Users = ['Clicker Dance', 'Jerusalema', 'Thriller', 'Fire Ball'];
  addUser(newUser: string) {
    if (newUser) {
      this.Users.push(newUser + "'s birthday song is " + this.Users[0]) ;
    }
  }
}
