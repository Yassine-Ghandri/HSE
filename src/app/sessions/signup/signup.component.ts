import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  
  constructor(private formBuilder:FormBuilder,
     private http:HttpClient,
     private router:Router) { }

  ngOnInit(): void {
    this.signupForm =this.formBuilder.group({
      fullName:[null,Validators.required],
      email:['',Validators.required],
      password:['',Validators.required,],
      confirmPassword:['',Validators.required],  
     
    });        
     
  }
  signup(){
    
    this.http.post<any>('http://localhost:3000/signupUser',this.signupForm.value)
    .subscribe(res=>{      
      this.router.navigate(['login']);
    },
    error=>{
      alert('wrong');
    })
    }
  
  

}
