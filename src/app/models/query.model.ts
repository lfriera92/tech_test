export class QueryModel {
  private _count: number;
  private _next: string;
  private _previous: string;
  private _results: any[];

  constructor() {
    this._count = 0;
    this._next = '';
    this._previous = '';
    this._results = [];
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get next(): string {
    return this._next;
  }

  set next(value: string) {
    this._next = value;
  }

  get previous(): string {
    return this._previous;
  }

  set previous(value: string) {
    this._previous = value;
  }

  get results(): any[] {
    return this._results;
  }

  set results(value: any[]) {
    this._results = value;
  }
}
