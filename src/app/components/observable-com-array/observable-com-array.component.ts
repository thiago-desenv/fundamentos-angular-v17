import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { usersListResponse } from '../../types/users-list-response.type';

@Component({
  selector: 'app-observable-com-array',
  templateUrl: './observable-com-array.component.html',
  styleUrl: './observable-com-array.component.scss'
})
export class ObservableComArrayComponent implements OnInit {
  users$!: Observable<usersListResponse>;

  constructor(private readonly _usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this._usersService.getUsers();
  }
}
