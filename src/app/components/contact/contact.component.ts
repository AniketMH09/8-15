import { Component, OnInit } from '@angular/core';
//import {  } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   lat: number = 16.7050;
  lng: number = 74.2433;
   formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    alert = false;
  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

  onSubmit(f) {
    //console.log(f);
    f.submitted = false;
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
    this.formData.subject = '';
    this.alert = true;
  }

}