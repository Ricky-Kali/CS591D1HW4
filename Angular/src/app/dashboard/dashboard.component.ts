import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {AlphavantageService} from '../alphavantage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = {};

  constructor(
    private alphaVantage: AlphavantageService,
  ) {}

  ngOnInit() {
    this.display();
  }

  display() {
    this.alphaVantage.getData()
      .subscribe(data => {this.data = data; });
  }

}
