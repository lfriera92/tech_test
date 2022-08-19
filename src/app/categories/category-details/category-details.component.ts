import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../../app.service";
import {Subscription} from "rxjs";
import {PeopleModel} from "../../models";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html'
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  data: any = null;
  category: string = '';
  attrsToBeShown: string[] = [];
  planet: string = '...';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    const s = this.activeRoute.params.subscribe((params:any) => {
      this.attrsToBeShown = [];
      this.category = params.category;
      this.getDetails(params.category + '/' + params.id);
    });
    this.subscriptions.push(s);
  }

  getDetails(url: string) {
    const s = this.appService.getDetails(url).subscribe(result => {
      this.data = result;

      if (this.category === 'people') {
        this.getPlanetIfPerson(result.homeworld);
        this.attrsToBeShown = ["name", "birth_year", "gender", "homeworld", "height", "mass", "hair_color", "eye_color", "skin_color"];
      } else if (this.category === 'films') {
        this.attrsToBeShown = ["title", "episode_id", "opening_crawl", "director", "producer", "release_date"];
      } else this.attrsToBeShown = [];
    });
    this.subscriptions.push(s);
  }

  getPlanetIfPerson(url: string) {
    const s = this.appService.getPersonPlanet(url).subscribe(planet => {
      this.planet = planet.name;
    });
    this.subscriptions.push(s);
  }

  getPersonHeight(person: PeopleModel) {
    const height = parseInt(person.height);

    if (height > 200)
      return 'Alta';
    else if (height > 100 && height < 200)
      return 'Media';
    else return 'Baja';
  }

  goList() {
    this.router.navigateByUrl('/' + this.category);
  }

}
