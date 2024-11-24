import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcrivainsComponent } from './ecrivains/ecrivains.component';
import { AuthGuard } from './guards/secure.guard';


const routes: Routes = [
  {path : "ecrivains" , component : EcrivainsComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
