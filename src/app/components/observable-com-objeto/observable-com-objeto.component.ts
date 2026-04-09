import { Subscription } from 'rxjs';
import { IUserResponse } from '../../interfaces/user-response';
import { UsersService } from './../../services/users.service';
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-com-objeto',
  templateUrl: './observable-com-objeto.component.html',
  styleUrl: './observable-com-objeto.component.scss'
})
export class ObservableComObjetoComponent implements OnInit, OnDestroy {
  user: IUserResponse = {} as IUserResponse;
  userSubs: Subscription | undefined;

  constructor(private readonly _userService: UsersService) { }

  ngOnInit() {
    this.userSubs = this._userService.getUserById(1).subscribe((userResponse) => {
      this.user = userResponse;
    });
  }

  ngOnDestroy() {
    this.userSubs && this.userSubs?.unsubscribe();
  }
}
