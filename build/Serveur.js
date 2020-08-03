"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serveur = void 0;
var http = require("http");
var Serveur = /** @class */ (function () {
    /**
     * Constructeur de la classe Serveur
     *
     * @param port Port du serveur HTTP
     * @param html Code HTML à afficher par le serveur HTTP
     */
    function Serveur(port, html) {
        this.port = port;
        this.html = html;
        this.port = port;
        this.html = html;
        this.connecter();
    }
    /**
     * Création et paramétrage du serveur HTTP
     */
    Serveur.prototype.creer = function () {
        var _this = this;
        return http.createServer(function (req, res) {
            res.writeHead(200);
            res.end(_this.html);
        });
    };
    /**
     * Connexion au serveur HTTP
     */
    Serveur.prototype.connecter = function () {
        this.creer().listen(this.port);
    };
    return Serveur;
}());
exports.Serveur = Serveur;
