import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NgIf],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  id!:number;
  user!:User;
  form!:FormGroup;

  constructor(public userService:UserService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['userId'];
    this.userService.findUser(this.id).subscribe((data:User)=>{
      this.user = data;
    });
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.updateUser(this.id, this.form.value).subscribe((data:any)=>{
      this.router.navigate(['/']);
      alert("User Updated Successfully");
    })
  }
}
