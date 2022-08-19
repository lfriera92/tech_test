import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tech-test';

  private subscriptions: Subscription[] = [];

  constructor(
    private appService: AppService
  ) {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit() {
  }
}
