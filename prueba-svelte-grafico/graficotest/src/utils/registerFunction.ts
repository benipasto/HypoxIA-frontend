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
    function quickHash(text: string): number {
        var hash = 0,
          i, chr;
        if (text.length === 0) return hash;
        for (i = 0; i < text.length; i++) {
          chr = text.charCodeAt(i);
          hash = ((hash << 5) - hash) + chr;
          hash |= 0;
        }
        return hash;
    }
    const users = (JSON.parse(localStorage.getItem('users') ?? '[]')) as any[];
    const id = quickHash(mail);
    users.push({ mail, password, id });
    // localStorage.setItem('mail', mail);
    // localStorage.setItem('password', password);
    localStorage.setItem('users', JSON.stringify(users));
    if (password === confirmPassword) {
        // Lógica de registro exitosa
        alert('Registro exitoso');
        window.location.href = '/'; // Redirige a la pantalla de inicio
    }
}
