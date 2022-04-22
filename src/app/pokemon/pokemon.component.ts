import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from './../model/Pokemon';
import { VizualizarPokemonComponent } from './../vizualizar-pokemon/vizualizar-pokemon.component';
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
    // this.list =[
    //   {id:1,nome:"Pikachu",ataque:100,defesa:35, image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"},
    //   {id:2,nome:"Bulbasaur",ataque:35,defesa:85,image:"https://www.picng.com/upload/pokemon/png_pokemon_43589.png"},
    //   {id:3,nome:"Pidgey",ataque:55,defesa:55,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"},
    //   {id:4,nome:"Golbat",ataque:65,defesa:55,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"},
    //   {id:5,nome:"Charizard",ataque:75,defesa:85,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"},
    //   {id:6,nome:"Squirtle",ataque:65,defesa:55,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"},
    // ]

  }

  ngOnInit(): void {
    this.grid = document.querySelector('.grid')

this.listarPokemon()


  this.grid.style.opacity='0'
  // this.grid.style.transform='translateY(-100px)'
  this.grid.style.transform='scale(0)'
setTimeout(() => {
  this.grid.style.transition='all 1s ease-in-out'
  this.grid.style.opacity='1'
  this.grid.style.transform='scale(1)'

  // this.grid.style.transform='translateY(00px)'

}, 200);
  }

listarPokemon(){
this.pokeServ.listarPokemons().subscribe(
  pokemon=>{
    this.poke=pokemon
  console.log(pokemon);
  }
)
}
poker:any
buscarPorId(id:any){
  this.pokeServ.pokemonPorId(id).subscribe(
    pekes=>{this.poker=pekes
    console.log(this.poker);
    this.route.navigate(['/pokedex',pekes.id])

    }

  )
}
  // visualizar(pokemon:any){
  //   console.log(pokemon);

  //   return this.visualizarPoke.mostrarPokemon(pokemon)
  // }



}
