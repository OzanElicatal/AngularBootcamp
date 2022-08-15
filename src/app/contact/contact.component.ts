import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/Models/contact';
import { ContactService } from 'app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[] = [];
  filterText: string= "";

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe(data => this.contact = data)
  }

}
