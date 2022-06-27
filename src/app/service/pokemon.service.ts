import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemon } from '../model/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   private readonly API = "http://localhost:3000/pokemons"
   private readonly APIPOKEMON = "http://localhost:8080/pokemon"
  constructor(private $http:HttpClient) { }

  todosPokemons():Observable<Pokemon[]>{
  return this.$http.get<Pokemon[]>(`${this.APIPOKEMON}/all`)
  }


  listarPokemons(){
    return this.$http.get<Pokemon[]>(`${this.API}`);

  }
  pokemonPorId(id:any):Observable<Pokemon>{
    return this.$http.get<Pokemon>(`${this.APIPOKEMON}/${id}`);
  }
}
