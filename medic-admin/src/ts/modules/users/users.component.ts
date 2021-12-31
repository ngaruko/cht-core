import { Component, OnInit } from '@angular/core';
import { User } from 'src/ts/services/user';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'mm-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users =  [
    {
      name: "Me",
      fullname: "james bond",
      roles : [0, 1, 2],
      phone : '097465',
      inactive: false
  },
  {
    name: "You",
    fullname: "clara love",
    roles : [0, 1, 2],
    phone : '097465',
    inactive: false
}
]

  loading =false;
  error = false


  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    //this.getUsers();
  }


// getUsers(){
//   this.usersService.getUsers().subscribe(data => {
//     this.users = data;
//     console.log('some user...', data);
//    });
// }
roles =[{
  name : 'regular user'
}]

editUser(user:User | any){
  alert('edit user...')
}
deleteUserPrepare(user:User, event:any){
  alert('deleteUserPrepare');
}
}

