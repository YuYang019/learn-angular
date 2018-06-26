import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public 因为html里要直接用messageService
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
