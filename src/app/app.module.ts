import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({
      // Don't worry about the names of the project, this is something old :)
      apiKey: "AIzaSyARgyJRWbhkXynpwF-W22gLhvREj2ZI7pY",
      authDomain: "mre--inconsistent-rules.firebaseapp.com",
      projectId: "mre--inconsistent-rules",
      storageBucket: "mre--inconsistent-rules.appspot.com",
      messagingSenderId: "938377300138",
      appId: "1:938377300138:web:d8c319953a9a975410e8d3"
    })),
    provideAuth(() => {
      const auth = getAuth();
      console.log('Retrieved Auth')
      return auth;
    }),
    provideFunctions(() => {
      const functions = getFunctions();
      console.log('Retrieved Functions')
      return functions;
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
