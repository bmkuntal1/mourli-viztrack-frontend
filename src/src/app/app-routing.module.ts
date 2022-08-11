import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/guards/auth.guard';
import { LayoutComponent } from './_shared/layouts/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, loadChildren: () => import('./modules/visitor-pass/visitor-pass.module').then(m => m.VisitorPassModule), canActivate: [AuthGuard]},
  // { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
