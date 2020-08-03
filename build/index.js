"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serveur_1 = require("./Serveur");
// Lancement du serveur HTTP
var serveur = new Serveur_1.Serveur(8080, '<h1>Hello world</h1>');
