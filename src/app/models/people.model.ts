import {FilmsModel} from "./films.model";

export class PeopleModel {

  private _name!: string;
  private _birth_year!: string;
  private _eye_color!: string;
  private _gender!: string;
  private _hair_color!: string;
  private _height!: string;
  private _mass!: string;
  private _skin_color!: string;
  private _homeworld!: string;
  private _films!: FilmsModel[];
  private _species!: any[];
  private _starships!: any[];
  private _vehicles!: any[];
  private _url!: string;
  private _created!: string;
  private _edited!: string;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get birth_year(): string {
    return this._birth_year;
  }

  set birth_year(value: string) {
    this._birth_year = value;
  }

  get eye_color(): string {
    return this._eye_color;
  }

  set eye_color(value: string) {
    this._eye_color = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get hair_color(): string {
    return this._hair_color;
  }

  set hair_color(value: string) {
    this._hair_color = value;
  }

  get height(): string {
    return this._height;
  }

  set height(value: string) {
    this._height = value;
  }

  get mass(): string {
    return this._mass;
  }

  set mass(value: string) {
    this._mass = value;
  }

  get skin_color(): string {
    return this._skin_color;
  }

  set skin_color(value: string) {
    this._skin_color = value;
  }

  get homeworld(): string {
    return this._homeworld;
  }

  set homeworld(value: string) {
    this._homeworld = value;
  }

  get films(): any[] {
    return this._films;
  }

  set films(value: any[]) {
    this._films = value;
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
