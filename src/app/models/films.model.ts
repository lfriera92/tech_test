export class FilmsModel {
  private _title!: string;
  private _episode_id!: number;
  private _opening_crawl!: string;
  private _director!: string;
  private _producer!: string;
  private _release_date!: string;
  private _species!: any[];
  private _starships!: any[];
  private _vehicles!: any[];
  private _characters!: any[];
  private _planets!: any[];
  private _url!: string;
  private _created!: string;
  private _edited!: string;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get episode_id(): number {
    return this._episode_id;
  }

  set episode_id(value: number) {
    this._episode_id = value;
  }

  get opening_crawl(): string {
    return this._opening_crawl;
  }

  set opening_crawl(value: string) {
    this._opening_crawl = value;
  }

  get director(): string {
    return this._director;
  }

  set director(value: string) {
    this._director = value;
  }

  get producer(): string {
    return this._producer;
  }

  set producer(value: string) {
    this._producer = value;
  }

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }

  get species(): any[] {
    return this._species;
  }

  set species(value: any[]) {
    this._species = value;
  }

  get starships(): any[] {
    return this._starships;
  }

  set starships(value: any[]) {
    this._starships = value;
  }

  get vehicles(): any[] {
    return this._vehicles;
  }

  set vehicles(value: any[]) {
    this._vehicles = value;
  }

  get characters(): any[] {
    return this._characters;
  }

  set characters(value: any[]) {
    this._characters = value;
  }

  get planets(): any[] {
    return this._planets;
  }

  set planets(value: any[]) {
    this._planets = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  get edited(): string {
    return this._edited;
  }

  set edited(value: string) {
    this._edited = value;
  }
}
