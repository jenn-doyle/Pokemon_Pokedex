import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: 'pokemon-directory/', component: ListComponent },
  { path: '', redirectTo: 'pokemon-directory/', pathMatch: 'full' },
  { path: 'pokemon/:name', component: ViewComponent },
  { path: '**', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
