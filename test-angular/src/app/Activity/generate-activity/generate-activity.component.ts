import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/Models/Activity';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css'],
})
export class GenerateActivityComponent implements OnInit {
  @Output() submitFavorite = new EventEmitter<Activity>();
  constructor(private http: HttpClient) {}
  currentActivity: Activity = {
    accessibility: 0,
    activity: '',
    key: '',
    participants: 0,
    price: 0,
    type: '',
    link: '',
  };
  showCurrent: boolean = false;
  ngOnInit(): void {}
  generateActivity() {
    this.http
      .get<Activity>('https://www.boredapi.com/api/activity/')
      .subscribe((x) => {
        this.currentActivity = x;
        this.showCurrent = true;
      });
  }

  saveActivity() {
    this.submitFavorite.emit(this.currentActivity);
  }
}
