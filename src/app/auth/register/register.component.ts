import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule,FormBuilder,NonNullableFormBuilder ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  // userForm=new FormGroup({
  //    name:new FormControl('',Validators.required),
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(4)]),
  //   confirm_password:new FormControl('',Validators.required)
  // });

    userForm = this.fb.nonNullable.group({
      // name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm_password: ['', Validators.required]
    });

  // form: RegisterForm = {
  //   email: '',
  //   password: '',
  //   confirm_password: '',
  // };

  passwordMatched: boolean = true;

  constructor(private authService: AuthService,private fb:FormBuilder) {}

  ngOnInit(): void {}
  
  isPasswordMatched(): boolean {
      const password = this.userForm.get('password')?.value;
      const confirm = this.userForm.get('confirm_password')?.value;
      this.passwordMatched=(password==confirm);
      return password === confirm;
    }

   
  submit() {
    console.log("hii");
    if(this.userForm.invalid){
        this.userForm.markAllAsTouched(); // Mark all fields as touched to show errors
        console.log("Kuch to match nhi huwa/")
        return ;
    }
      this.passwordMatched = this.isPasswordMatched();
      if (!this.passwordMatched) {
        return;
      }
    console.log("from dhahibad:",this.userForm.value);
    this.authService.register(this.userForm.getRawValue());
  }



  isLoading() {
    return this.authService.isLoading;
  }
}
