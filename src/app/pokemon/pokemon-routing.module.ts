import { VizualizarPokemonComponent } from './../vizualizar-pokemon/vizualizar-pokemon.component';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:PokemonComponent},
  {path:':id',component:VizualizarPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
