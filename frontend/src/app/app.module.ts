import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { PressureComponent } from './pressure/pressure.component';
import { WaterReminderComponent } from './water-reminder/water-reminder.component';
import { ActivityComponent } from './activity/activity.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeightComponent } from './weight/weight.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    PressureComponent,
    WaterReminderComponent,
    ActivityComponent,
    LifestyleComponent,
    WeightComponent,
    ProfileComponent,
    TestComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
