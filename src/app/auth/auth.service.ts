import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  passwordMatched: boolean = true;


  private getFriendlyError(error: any): string {
  if (error.code === 'auth/email-already-in-use') {
    return 'This email is already in use.';
  }
  if (error.code === 'auth/invalid-email') {
    return 'Invalid email address.';
  }
  if (error.code === 'auth/weak-password') {
    return 'Password is too weak.';
  }
  return error.message;
}


async register(form: RegisterForm) {
  if (this.isLoading) return;
  this.isLoading = true;
  console.log("hii from register");

  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
    const user = userCredential.user;

    this.isAuthenticated = true;
    alert('✅ Registration successful! Welcome, ' + user.email);
    this.router.navigate(['login']);
  } catch (error: any) {
    this.isAuthenticated = false;
    alert(this.getFriendlyError(error));
    console.error('❌ Registration error:', error.code);
  } finally {
    this.isLoading = false;
  }
}



  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
