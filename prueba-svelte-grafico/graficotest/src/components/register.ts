//por ahora no es necesario... veo si lo uso o si lo implemento directamente dentro de register
export function register(mail: string, password: string, confirmPassword: string) {
    if (!mail.trim()) {
      alert('El campo de correo electrónico no puede estar vacío');
      return;
    }
  
    if (!password.trim() || !confirmPassword.trim()) {
      alert('Los campos de contraseña no pueden estar vacíos');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    localStorage.setItem('mail', mail);
    localStorage.setItem('password', password);
    alert('Registro exitoso');
  }
  