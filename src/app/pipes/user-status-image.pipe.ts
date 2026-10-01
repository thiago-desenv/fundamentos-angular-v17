import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatusImage'
})
export class UserStatusImagePipe implements PipeTransform {

  transform(userStatus: number): any {
    console.log('UserStatusImagePipe');
    const statusImage: { [key: number]: string } = {
      1: 'assets/images/active-user-icon.png',
      2: 'assets/images/inactive-user-icon.png'
    }

    return statusImage[userStatus];
  }
}
