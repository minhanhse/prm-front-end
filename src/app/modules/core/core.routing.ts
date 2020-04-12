import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'account', pathMatch: 'full'},
      {
        path: 'account',
        loadChildren: () => import('src/app/modules/core/modules/account/account.module').then(mod => mod.AccountModule),
      },
    ]
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
