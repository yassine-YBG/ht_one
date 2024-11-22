import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriesComponent } from './categories/categories.component'; 
import { PressureComponent } from './pressure/pressure.component';
import { WeightComponent } from './weight/weight.component';
import { WaterReminderComponent } from './water-reminder/water-reminder.component';
import { ActivityComponent } from './activity/activity.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { TestComponent } from './test/test.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login if the path is empty
  { path: 'login', component: LoginComponent },           // Login route
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: CategoriesComponent },  
  { path: 'pressure', component: PressureComponent },
  { path: 'weight', component: WeightComponent },
  { path: 'water-reminder', component: WaterReminderComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'lifestyle', component: LifestyleComponent }, 
  {path: 'test',component :TestComponent },
  {path: 'article/:id',component: ArticleDetailComponent } ,   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
