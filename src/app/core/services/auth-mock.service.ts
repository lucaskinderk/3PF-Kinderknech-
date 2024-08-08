export class AuthMockService {
  login() {
    //
    console.log('EJEC LOGIN FALSO');
    return {
      name: 'FAKE USER',
      email: '...',
    };
  }

  verificarToken() {}

  obtenerUsuarioAutenticado() {}
}
