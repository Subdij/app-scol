import { IEtudiant } from "./ietudiant";

export class Etudiant implements IEtudiant {
    constructor(
        public _nom: string,
        public _prenom: string,
        public _rue: string,
        public _cp: string,
        public _ville: string,
        public _courriel: string,
        public _genre: string,
        public _age: number,
        public _idCand: number
    ) { 
    }

    get nom(): string {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }
    
    get prenom(): string {
        return this._prenom;
    }

    set prenom(prenom: string) {
        this._prenom = prenom;
    }

    get rue(): string {
        return this._rue;
    }

    set rue(rue: string) {
        this._rue = rue;
    }

    get cp(): string {
        return this._cp;
    }

    set cp(cp: string) {
        this._cp = cp;
    }

    get ville(): string {
        return this._ville;
    }

    set ville(ville: string) {
        this._ville = ville;
    }

    get courriel(): string {
        return this._courriel;
    }

    set courriel(courriel: string) {
        this._courriel = courriel;
    }

    get genre(): string {
        return this._genre;
    }

    set genre(genre: string) {
        this._genre = genre;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    get idCand(): number {
        return this._idCand;
    }

    set idCand(id: number) {
        this._idCand = id;
    }
}
