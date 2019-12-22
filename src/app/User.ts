export class User {

  name: string;
  surname: string;
  login: string;
  password: string;
  role: string;
  constructor(name: string, surname: string, login: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.login = login;
    this.password = password;
  }

}
