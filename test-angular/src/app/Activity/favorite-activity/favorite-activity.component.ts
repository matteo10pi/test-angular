import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/Activity';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css'],
})
export class FavoriteActivityComponent implements OnInit {
  @Input() activitiesList: Activity[] = [];
  constructor() {}

  ngOnInit(): void {}
  removeActivity(activity: Activity) {
    this.activitiesList.splice(this.activitiesList.indexOf(activity), 1);
    localStorage.removeItem('activityList');
    localStorage.setItem('activityList', JSON.stringify(this.activitiesList));
  }
  color(activity: Activity) {
    if (activity.accessibility > 0.5) {
      return 'table-success';
    } else if (activity.accessibility < 0.3) {
      return 'table-warning';
    } else {
      return 'table-danger';
    }
  }
}
