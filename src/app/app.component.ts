import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputText: string = 'Hi...have a nice day - message from parent';

  receiveChildData(data) {
    console.log(data);
  }
}
