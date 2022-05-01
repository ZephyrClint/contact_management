import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form-master',
  templateUrl: './form-master.component.html',
  styleUrls: ['./form-master.component.css']
})
export class FormMasterComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Add New Contact');
  }

  ngOnInit(): void {
  }

}
