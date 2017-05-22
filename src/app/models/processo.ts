export class Processo {
    public nome : String;
    public tamanhoTotal : number;
    public tamanhoAtual : number;


    constructor(nome:String,tamanho: number)
    {
        this.nome = nome;
        this.tamanhoTotal = tamanho;
        this.tamanhoAtual = tamanho;
    }

    public reduzir(tamanho: number)
    {
        this.tamanhoAtual -= tamanho;
    }

    public finalizou()
    {
        if(this.tamanhoAtual <= 0)
            return true;
        return false;
    }

    public porCentConcluida()
    {
        return (this.tamanhoAtual * 100)/this.tamanhoTotal;
    }

}
