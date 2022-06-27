import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from './../model/Pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  filter:any
  list:Array<any>=[]
  poke:Array<Pokemon>=[]
  value:any
  grid:any
  constructor(private route:Router,private pokeServ:PokemonService) {

  }

  ngOnInit(): void {
    this.grid = document.querySelector('.grid')


    this.listarPokemon()


    this.grid.style.opacity='0'
    this.grid.style.transform='scale(0)'
    setTimeout(() => {
    this.grid.style.transition='all 1s ease-in-out'
    this.grid.style.opacity='1'
    this.grid.style.transform='scale(1)'
    }, 200);
  }

  listarPokemon(){
    this.pokeServ.todosPokemons().subscribe(pok=>{
      if(pok){
        this.poke = pok;
      }
    })
  }
  poker:any
  buscarPorId(id:any){
    this.pokeServ.pokemonPorId(id).subscribe(
      pekes=>{this.poker=pekes
        this.route.navigate(['/pokedex',pekes.id])
    })
  }
}
