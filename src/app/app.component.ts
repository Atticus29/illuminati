import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  adminStatus = true; // TODO edit this
  loginDisplay = false;

  toggleLoginDisplay(){
    this.loginDisplay = true;
  }

  onSubmit(formData){
    if(formData.valid){
      console.log("Valid data!")
    }
  }
}
