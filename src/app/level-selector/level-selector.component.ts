import { Component, OnInit } from '@angular/core';

import { CostsService } from '../costs.service';

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.css']
})
export class LevelSelectorComponent implements OnInit {

  public level;

  constructor(private _costsService: CostsService) {
    this.level = this._costsService.getLevel()
  }

  levelChanged() {
    this._costsService.setLevel(this.level);
  }

  ngOnInit() {
    this._costsService.calculateCosts();
  }

}
