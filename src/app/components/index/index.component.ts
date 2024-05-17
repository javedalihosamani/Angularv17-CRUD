import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {User} from '../../interface/user'
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  users:User[]=[];

  constructor(public userService: UserService){
    this.userService.getAllUsers().subscribe((data:User[])=>{
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(id:number){
    if(confirm("Are you sure?")){
      this.userService.deleteUser(id).subscribe((data:any)=>{
        this.users = this.users.filter(item=>item.id !== id);
        //this.router.navigateByUrl('/');
        //OR 
        //this.router.navigate(['/']);
        alert('User Deleted Successfully');
      })
    } else {
      alert("Delete User failed");
    }
  }
}
