<script>
    let username = '';
    let password = '';
  
    const register = () => {
      if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Usuario registrado con éxito');
      } else {
        alert('Por favor, completa todos los campos');
      }
    };
  </script>
  
  <main>
    <h1>Registro</h1>
    <form on:submit|preventDefault={register}>
      <label for="username">Nombre de usuario</label>
      <input type="text" id="username" bind:value={username} />
  
      <label for="password">Contraseña</label>
      <input type="password" id="password" bind:value={password} />
  
      <button type="submit">Registrarse</button>
    </form>
  </main>
  