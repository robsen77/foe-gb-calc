import { Component, OnInit } from '@angular/core';

import { CostsService } from '../costs.service';

@Component({
  selector: 'app-own-share-table',
  templateUrl: './own-share-table.component.html',
  styleUrls: ['./own-share-table.component.css']
})
export class OwnShareTableComponent implements OnInit {

  public ownShareCosts;
  public rightColumnPlusIndex = 0;

  constructor(private costsService: CostsService) { }

  ngOnInit() {
    this.costsService.ownShareCosts.subscribe(ownShareCosts => {
      this.ownShareCosts = ownShareCosts;
      if (this.ownShareCosts.levelData) {
        this.rightColumnPlusIndex = Math.ceil(this.ownShareCosts.levelData.length / 2);
      }
    });
  }

}
