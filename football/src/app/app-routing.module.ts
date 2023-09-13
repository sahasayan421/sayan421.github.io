import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './Components/table/table.component';
import { GameResultsComponent } from './game-results/game-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/england/39', pathMatch: 'full' },
  { path: 'england/:id', component: TableComponent },
  { path: 'spain/:id', component: TableComponent },
  { path: 'germany/:id', component: TableComponent },
  { path: 'france/:id', component: TableComponent },
  { path: 'italy/:id', component: TableComponent },
  { path: 'results/:id', component: GameResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
