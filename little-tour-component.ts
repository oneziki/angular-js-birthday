@Component({
  selector: 'app-little-tour',
  template: `
    <input
      #newUser
      (keyup.enter)="addUser(newUser.value)"
      (blur)="addUser(newUser.value); newUser.value = ''"
    />

    <button (click)="addUser(newUser.value)">Add</button>

    <ol>
      <li *ngFor="let User of Users">{{ User }}</li>
    </ol>
  `
})
export class LittleTourComponent {
  Users = ["Clickatell Dance", "Jerusalema", "To the Moon", "Thriller", "Forever Young", "Encho", "Buffalo Soldier"];
  random = Math.floor(Math.random() * this.Users.length);
  addUser(newUser: string) {
    if (newUser) {
      this.Users.push(newUser + "'s happy birthday song is number " + this.random);
    }
  }
}
