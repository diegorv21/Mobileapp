export class Usuario {
  public nombreUsuario = '';
  public password = '';

  public validarNombreUsuario(): string {
    // eslint-disable-next-line max-len
    if (this.nombreUsuario !== "atorres@duocuc.cl" && this.nombreUsuario !== "avalenzuela@duocuc.cl" && this.nombreUsuario !== 'cfuentes@duocuc.cl') {
      return 'Usuario incorrecto';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length !== 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
