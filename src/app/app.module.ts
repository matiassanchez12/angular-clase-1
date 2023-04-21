import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { EjerciciounoComponent } from './components/ejerciciouno/ejerciciouno.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ExercisesComponent,
    EjerciciounoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
