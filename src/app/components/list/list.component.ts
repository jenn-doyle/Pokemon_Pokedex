import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { concat } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  totalPokemons: number;
  pokemons: any[] = [];
  page: number = 1;

  constructor(
    private pokemonService: PokemonService,
    private scroll: ViewportScroller) {}

    scrollToTop(){
      this.scroll.scrollToPosition([0,0]);
  }

  ngOnInit(): void {
    this.getPokemonCards();
  }

  getPokemonCards(): void {
    this.pokemonService.getPokemons()
    .subscribe(response => {
      this.totalPokemons = 300;

        const details = response.results.map((i: any) => this.pokemonService.getMorePoke(i.name))
        concat(...details).subscribe((response: any) => {
        this.pokemons.push(response);
        })
      });
  }
}
