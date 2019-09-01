import { Component, OnInit } from '@angular/core';
import { CostsService } from '../costs.service';

@Component({
  selector: 'app-own-share',
  templateUrl: './own-share.component.html',
  styleUrls: ['./own-share.component.css']
})
export class OwnShareComponent implements OnInit {
  ownShareCosts;

  constructor(
    private costsService: CostsService
  ) { }

  ngOnInit() {
    this.costsService.ownShareCosts.subscribe(ownShareCosts => this.ownShareCosts = ownShareCosts);
  }

}
