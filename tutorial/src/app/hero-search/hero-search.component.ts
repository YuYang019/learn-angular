import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators'
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  // $结尾是表示这是一个Observeable值，惯例
  heroes$: Observable<Hero[]>;

  // rxjs主体
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 节流300ms
      debounceTime(300),
      // 忽略和之前相同的值
      distinctUntilChanged(),
      switchMap((term: string) => 
        this.heroService.searchHeroes(term)
      )
    )
  }

}
