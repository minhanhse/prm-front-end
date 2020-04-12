import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './components/navigate/navigate.component';

const routes: Routes = [
  { path: '', redirectTo: 'navigate' },
  { path: 'navigate', component: NavigateComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
