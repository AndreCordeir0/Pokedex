import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from './../model/Pokemon';
import { PokemonComponent } from './../pokemon/pokemon.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vizualizar-pokemon',
  templateUrl: './vizualizar-pokemon.component.html',
  styleUrls: ['./vizualizar-pokemon.component.css']
})
export class VizualizarPokemonComponent implements OnInit {


  constructor(private activated:ActivatedRoute,private pokServ:PokemonService) {}
nomePokemon:any
ataquePokemon:any
defesaPokemon:any
imagePokemon:any
tipoPokemon:any
fraqPokemon:any
grid:any
id:any
pokemon :Pokemon
  ngOnInit(): void {

// console.log(this.nomePokemon);
this.nomePokemon = document.querySelector('.nomep')
this.ataquePokemon = document.querySelector('.ataquep')
this.defesaPokemon = document.querySelector('.defesap')
this.imagePokemon = document.querySelector('.imagep')
this.tipoPokemon = document.querySelector('.tipop')
this.fraqPokemon = document.querySelector('.fraqp')
this.grid =document.querySelector('.central')
// console.log(this.nome);
// console.log(this.getNome);


this.activated.params.subscribe(parametros => {
  if (parametros['id']) {
    this.id = parametros['id'];
    this.pokServ.pokemonPorId(this.id).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.nomePokemon.innerHTML=pokemon.nome
      this.ataquePokemon.innerHTML="Ataque: "+pokemon.ataque
      this.defesaPokemon.innerHTML="Defesa: "+pokemon.defesa
      this.tipoPokemon.innerHTML="Tipo: : "+pokemon.tipo
      this.fraqPokemon.innerHTML="Fraqueza: "+pokemon.fraqueza
      this.imagePokemon.src=pokemon.image
      console.log(this.pokemon.nome);

    });
  }
});
//Animação imagem pokemon
this.imagePokemon.style.transform="translateX(220px)"
this.imagePokemon.style.opacity='0'
//Animação nome pokemon
this.nomePokemon.style.transform="translateX(-220px)"
this.nomePokemon.style.opacity='0'
//Animação da Grid
this.grid.style.transform="translateY(-220px)"
this.grid.style.opacity='0'
setTimeout(() => {
  this.imagePokemon.style.transition='all 1s ease-in-out'
  this.imagePokemon.style.opacity='1'
  this.imagePokemon.style.transform="translateX(0px)"

  this.nomePokemon.style.transition='all 1s ease-in-out'
  this.nomePokemon.style.opacity='1'
  this.nomePokemon.style.transform="translateX(0px)"

  this.grid.style.transition='all 1s ease-in-out'
  this.grid.style.opacity='1'
  this.grid.style.transform="translateY(0px)"


}, 200);

  }

//   nome:string;
//   ataque:any;
//   image:any;
//   defesa:number;

//   mostrarPokemon(pokes:any){

//   this.nome = pokes.nome
//   this.ataque=pokes.ataque

//   console.log(pokes.nome+", "+ this.nome );

//   }


// public get getNome() : string {
//   return this.nome
// }

}
