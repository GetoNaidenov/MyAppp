import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
    {
      path: '',
      pathMatch: 'full',
      component:  MainComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'post',
      component: PostsComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
