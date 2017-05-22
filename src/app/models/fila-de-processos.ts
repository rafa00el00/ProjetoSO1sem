import { Processo } from './processo';
export class FilaDeProcessos {

    public processos: Array<Processo>;
    private posicao: number;
    private qtdProcessos: number;
    constructor() {
        this.processos = new Array<Processo>();
        this.posicao = 1;
        this.qtdProcessos = 0;

    }

    /**
     * put
     */
    public put(processo: Processo) {
        if (this.size() <= 0)
            this.processos.splice(this.posicao - 1, 0, processo);
        else
            this.processos.splice(this.posicao - 1, 0, processo);
        this.qtdProcessos++;
    }

    public remove(processo: Processo) {
        this.processos.splice(this.processos.indexOf(processo), 1);
        this.qtdProcessos--;
    }

    public removeAt(indice: number) {
        this.processos.splice(indice, 1);
        this.qtdProcessos--;
    }

    public size() {
        return this.qtdProcessos;
    }

    public next() {
        if (this.size() <= 0)
            return null;

        if (this.posicao >= this.size()-1)
            this.posicao = -1;
        let temp =  parseInt(""+ this.posicao);
        this.posicao++;
        
        return this.processos[temp];
    }

    public getAll() {
        return this.processos;
    }

    public getAtual() {
        if (this.size() <= 0)
            return null; 
            if (this.posicao >= this.size())
            this.posicao = 0; 

        return this.processos[this.posicao];
    }

}
