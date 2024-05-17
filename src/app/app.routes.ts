import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewComponent } from './components/view/view.component';

export const routes: Routes = [
    {path:'', redirectTo:'/index', pathMatch:'full'},
    {path:'index', component:IndexComponent},
    {path:'create', component: CreateComponent},
    {path:'index/edit/:userId',component:UpdateComponent},
    {path:'index/view/:userId',component:ViewComponent},
    {path:'**', component:PnfComponent}
];
