import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-dis-form',
  template: `
        
  <h6>Name : {{ name }}</h6>
  <h6>Mobile No: {{ mobile }}</h6>
  <h6>Email :{{ email }}</h6>
  `,
  styleUrls: ['./dis-form.component.css']
})
export class DisFormComponent implements OnInit {

  constructor(private _fch: FetchDataService) { }

  
  ngOnInit(): void {
  }

  public name = this._fch.Fe;
  public mobile = this._fch.Le;
  public email = this._fch.Cy;

}
