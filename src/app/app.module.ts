import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Amplify, {Interactions } from 'aws-amplify';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
Amplify.configure({
  Auth: {
    identityPoolId: 'YOUR_ID_POOL',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "hotelbooking_dev": {
        "name": "hotelbooking_dev",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
