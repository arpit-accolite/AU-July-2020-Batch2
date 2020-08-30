import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormControl } from '@angular/forms';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adm-form',
  templateUrl: './adm-form.component.html',
  styleUrls: ['./adm-form.component.css']
})

export class AdmFormComponent implements OnInit {

  constructor(private _fch : FetchDataService , 
              private _activatedRoute : ActivatedRoute,
              private _router : Router   
    ) { 
  }
    profileForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Mobile: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
    }); 

  public nme = this.profileForm.value.Name;
  public mb = this.profileForm.value.Mobile;
  public emailad = this.profileForm.value.Email;

  set name(nme : string ) {
    this._fch.Fe =nme;
  }

  set mobile(mb: string) {
    this._fch.Le = mb;
  }

  set email(emailad: string) {
    this._fch.Cy = emailad;
  }

  onSubmit() {

    if(this.profileForm.valid)
    {
    console.log(this.profileForm.value);
    console.log(this._fch.Fe);
    console.log(this._fch.Le);
    console.log(this._fch.Cy);
    this._router.navigate(['/formdisplay']);
    }
    else
      console.log("Invalid Inputs");


  }
  ngOnInit(): void {
  }
}