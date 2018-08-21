
export default class TestClass {
    constructor( msg ) {
        this.msg = msg || 'hi there';

    }

    sayHello() {
        console.info( this.msg, Date.now() );
    }
}
