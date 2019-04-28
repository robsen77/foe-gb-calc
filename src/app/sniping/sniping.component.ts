import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SniperService } from '../sniper.service';
import { CustomValidator } from '../shared/validation';
import { NoDuplicate } from '../shared/no-duplicate.validator';

@Component({
  selector: 'app-sniping',
  templateUrl: './sniping.component.html',
  styleUrls: ['./sniping.component.css'],
})

export class SnipingComponent implements OnInit {
  public sniperInput: Number;
  public snipers: Array<Number> = [];

  public sniperForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private sniperService: SniperService) { }

  ngOnInit() {
    this.sniperForm = this.formBuilder.group({
      sniperInput: ['', [Validators.required, CustomValidator.numberValidator, NoDuplicate(this.sniperService.getSnipers())]]
    });
  }

  public onSubmit() {
    if (this.sniperForm.invalid) {
      return;
    }

    this.sniperService.addSniper(this.sniperForm.value.sniperInput);
    this.snipers = this.sniperService.getSnipers();
    this.sniperForm.reset();
  }

  public removeSniper(sniper) {
    this.sniperService.removeSniper(sniper);
    this.snipers = this.sniperService.getSnipers();
  }
}
