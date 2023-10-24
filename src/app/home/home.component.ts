import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private loading: LoadingService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading.hide();
    }, 500);
  }

  get loader(): LoadingService{
    return this.loading;
  }
}
