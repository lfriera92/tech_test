import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {combineLatest, Subscription} from "rxjs";
import {AppService} from "../../app.service";
import {PeopleModel} from "../../models";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['../../app.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  category: string = '';
  categoryData: any[] = [];
  loading: boolean = false;
  searchTokensArray: string[] = [];
  categorySearch: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private appService: AppService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit(): void {
    if (localStorage.getItem('searchTokensArray')) {
      // @ts-ignore
      this.searchTokensArray = localStorage.getItem('searchTokensArray').split(',');
    }

    if (localStorage.getItem('categorySearch')) {
      // @ts-ignore
      this.categorySearch = JSON.parse(localStorage.getItem('categorySearch'));
    }

    const urlParameters = combineLatest(this.activeRoute.params,
      this.activeRoute.queryParams,(params: any, queryParams: any) => ({
        ...params, ...queryParams}));

    urlParameters.subscribe((parameters: any) => {
      this.categoryData = [];
      this.category = '';
      this.loading = true;

      if (parameters) {
        this.category = parameters.category;

        if (parameters.category && parameters.search) {
          if (this.searchTokensArray.length < 5 && !this.searchTokensArray.includes(parameters.search)) {
            this.searchTokensArray.push(parameters.search);
            localStorage.setItem('searchTokensArray', this.searchTokensArray.join(','));
            this.categorySearch.push({category: this.category, search: parameters.search});
            localStorage.setItem('categorySearch', JSON.stringify(this.categorySearch));
          }

          this.filterData(parameters.search);
        }

        if (parameters.category && !parameters.search) {
          this.getCategoryData();
        }
      }
    })
  }

  getCategoryData() {
    if (this.category === 'people' || this.category === 'films') {
      const s = this.appService.getCategoryData(this.category).subscribe(result => {
        this.loading = false;
        this.processData(result.results);
        this.cdr.detectChanges();
      });
      this.subscriptions.push(s);
    }
  }

  getPlanetIfPerson(person: PeopleModel) {
    const s = this.appService.getPersonPlanet(person.homeworld).subscribe(planet => {
      person.homeworld = planet.name;
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

  goDetalles(data: any, index: number) {
    const id = index + 1;
    this.router.navigateByUrl('/' + this.category + '/' + id);
  }

  filterData(search: string) {
    this.appService.filterData(search, this.category).subscribe(result => {
      this.loading = false;
      this.processData(result.results);
      this.cdr.detectChanges();
    })
  }

  processData(data: any) {
    this.categoryData = data;
    if (this.category === 'people') {
      this.categoryData.map((people: PeopleModel) => {
        this.getPlanetIfPerson(people);
      });
    }
  }

  search(token: string) {
    if (!this.loading) {
      if (localStorage.getItem('categorySearch')) {
        const searchData: any[] = JSON.parse(<string>localStorage.getItem('categorySearch'));
        const category = searchData.find(s => s.search == token).category;
        if (category !== this.category) {
          this.router.navigate(
            ['/' + category],
            {
              relativeTo: this.activeRoute,
              queryParams: { search: token }
            });
        } else {
          this.router.navigate(
            [],
            {
              relativeTo: this.activeRoute,
              queryParams: { search: token },
              queryParamsHandling: 'merge'
            });
        }
      }
    }
  }
}
