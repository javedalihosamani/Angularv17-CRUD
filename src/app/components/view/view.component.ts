import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id!:number;
  user!:User;

  constructor(public userService:UserService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['userId'];
    this.userService.findUser(this.id).subscribe((data:User)=>{
      this.user = data;
    });
  }
}
