export function register(mail: string, password: string, confirmPassword: string): void {
    if (!mail.trim()) {
        alert('El campo de correo electrónico no puede estar vacío');
        return;
    }

    if (!password.trim()) {
        alert('El campo de contraseña no puede estar vacío');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const users = (JSON.parse(localStorage.getItem('users') ?? '[]')) as any[];
    users.push({ mail, password });
    // localStorage.setItem('mail', mail);
    // localStorage.setItem('password', password);
    localStorage.setItem('users', JSON.stringify(users));
    if (password === confirmPassword) {
        // Lógica de registro exitosa
        alert('Registro exitoso');
        window.location.href = '/'; // Redirige a la pantalla de inicio
    }
}
