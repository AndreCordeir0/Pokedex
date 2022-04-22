import { PokemonService } from './../service/pokemon.service';
import { PokemonComponent } from './pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { VizualizarPokemonComponent } from '../vizualizar-pokemon/vizualizar-pokemon.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonComponent,
    VizualizarPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],exports:[PokemonComponent,VizualizarPokemonComponent],
    providers: [PokemonService],

})
export class PokemonModule { }
