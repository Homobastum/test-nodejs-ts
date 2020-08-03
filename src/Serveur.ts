import http = require('http');

export class Serveur {
    /**
     * Constructeur de la classe Serveur
     * 
     * @param port Port du serveur HTTP
     * @param html Code HTML à afficher par le serveur HTTP
     */
    constructor (public port: number, public html: string) {
        this.port = port;
        this.html = html;

        this.connecter();
    }

    /**
     * Création et paramétrage du serveur HTTP
     */
    creer () {
        return http.createServer((req, res) => {
            res.writeHead(200);
            res.end(this.html);
        });
    }

    /**
     * Connexion au serveur HTTP
     */
    connecter () {
        this.creer().listen(this.port);
    }
}