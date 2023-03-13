import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() { }

  login(user: string, pass: string): boolean {
    // Ajoutez ici la logique pour valider les informations d'identification de l'utilisateur
    if (user === 'utilisateur' && pass === 'mdp') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isLoggedIn_(): boolean {
    return this.isLoggedIn;
  }
}