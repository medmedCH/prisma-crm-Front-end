import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../../services/security/storage.service';
import {UsersService} from '../../../services/managers/users.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.list.html',
  styleUrls: []
})
export class ListUserComponent implements OnInit {

  title = 'List Users';

  constructor(private userService: UsersService,
              private storageService: StorageService,
              private router: Router) {
  }

  rows = [];
  allUsers: User[];
  config: {} = {itemsPerPage: 0, currentPage: 0, totalItem: 0};
  collection = {count: 10, data: []};


  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // @ts-ignore
    this.userService.getAllUsers<User[]>().subscribe(
      response => {
        console.log('hello faq');
        this.allUsers = response;
        this.collection.count = response.length;
        console.log(this.collection.count);
        for (let i = 0; i < this.collection.count; i++) {
          this.collection.data.push(
            {
              value: this.allUsers.pop()
            }
          );
          this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.collection.count
          };
        }
        console.log(this.collection.data);

      },
      error => {
        console.log('hello error');
        console.log(error);
      }
    );
  }


  deleteUser(u: User) {
    if (confirm('Are you sure to delete this user')) {
      this.userService.deleteUser(u).subscribe(
        response => {
          this.allUsers.splice(u.id, 1);
        },
        error => {
          console.log(error);
        }
      );
    }
  }


}
