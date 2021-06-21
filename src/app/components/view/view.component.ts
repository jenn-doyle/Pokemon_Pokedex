import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.pokemonService.getMorePoke(params.name).subscribe(response => {
        this.pokemon = response;
      });
    });
  }

}
