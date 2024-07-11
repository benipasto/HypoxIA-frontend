<script>
    let username = '';
    let password = '';
  
    const login = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.username === username && user.password === password) {
          alert('Inicio de sesión exitoso');
          // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
        } else {
          alert('Nombre de usuario o contraseña incorrectos');
        }
      } else {
        alert('No se encontró ningún usuario registrado');
      }
    };
  </script>
  
  <main>
    <h1>Inicio de Sesión</h1>
    <form on:submit|preventDefault={login}>
      <label for="username">Nombre de usuario</label>
      <input type="text" id="username" bind:value={username} />
  
      <label for="password">Contraseña</label>
      <input type="password" id="password" bind:value={password} />
  
      <button type="submit">Iniciar Sesión</button>
    </form>
  </main>
  