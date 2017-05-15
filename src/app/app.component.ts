import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentByString: string;
  parentIdentityString: string;
  title = 'app works!';
  adminStatus = true; // TODO edit this
  loginDisplay = false;

  toggleLoginDisplay(){
    if(this.loginDisplay){
      this.loginDisplay = false;
    } else{
      this.loginDisplay = true;
    }
  }

  onSubmit(formData){
    if(formData.valid){
      console.log("Valid data!")
    }
  }
}
