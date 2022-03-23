import { Component, OnInit } from '@angular/core';
import { Activity } from '../Models/Activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  activitiesList: Activity[] = [];

  ngOnInit(): void {
    const local = localStorage.getItem('activityList');
    if (local != null) this.activitiesList = JSON.parse(local);
  }
  submitFavoriteActivity(activity: Activity) {
    if (!this.activitiesList.includes(activity)) {
      this.activitiesList.push(activity);
    }
    localStorage.setItem('activityList', JSON.stringify(this.activitiesList));
  }
}
