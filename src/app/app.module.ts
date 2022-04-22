import { VizualizarPokemonComponent } from './vizualizar-pokemon/vizualizar-pokemon.component';
import { PokemonService } from './service/pokemon.service';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
