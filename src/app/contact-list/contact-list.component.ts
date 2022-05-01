import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Contact } from 'src/data/Contact-Interface';
import { CONTACTS } from 'src/data/contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = CONTACTS;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Contact List");
  }

  ngOnInit(): void {
  }

}
