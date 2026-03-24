import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../enums/user-status.enum';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(userStatus: number): string {
    const userStatusDescription: { [key: number]: string } = {
      [UserStatus.ATIVO]: 'Ativo',
      [UserStatus.INATIVO]: 'Inativo',
    }

    return userStatusDescription[userStatus] ? userStatusDescription[userStatus] : 'Inválido';
  }


}
