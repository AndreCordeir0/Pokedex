import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pokemon } from '../model/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   private readonly API = "http://localhost:3000/pokemons"
  constructor(private $http:HttpClient) { }



listarPokemons(){
  return this.$http.get<Pokemon[]>(`${this.API}`)

}
pokemonPorId(id:any):Observable<Pokemon>{
  return this.$http.get<Pokemon>(`${this.API}/${id}`)
}
}
