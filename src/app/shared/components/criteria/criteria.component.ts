import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CriteriaService } from 'src/app/core/services/criteria.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  @Input() criteriaConfig: any;

  criteriaForm: FormGroup;

  constructor(private fb: FormBuilder, private _criteriaService: CriteriaService) {
    this._criteriaService.criteriaObject.subscribe((data) => {
      if(data && data === 'reset') {
        this.resetCriteria()
      }
    })
   }

  ngOnInit(): void {
    this.criteriaForm = this.fb.group({
      fromRange: [null],
      toRange: [null]
    })
  }

  get f() {
    return this.criteriaForm.controls;
  }

  resetCriteria() {
    this.criteriaForm.reset()
  }

  onSubmit() {
    if (this.criteriaForm.valid) {
      let criteriaObject = {
        ...this.criteriaForm.value,
        linkedReports: this.criteriaConfig?.linkedReports ? this.criteriaConfig?.linkedReports : [],
        unitKey: this.criteriaConfig?.unitKey
      }
      this._criteriaService.emit(criteriaObject)
    }
  }
}
