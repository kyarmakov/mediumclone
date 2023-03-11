import { Component, Input, OnInit } from "@angular/core";
import { BackendErrors } from "../../interfaces/backend-errors.interface";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.html']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrors;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map(
      (name: string) => {
        const messages = this.backendErrors[name].join(', ');

        return `${name} ${messages}`;
      }
    );
  }
}