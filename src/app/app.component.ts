import { FilaDeProcessos } from './models/fila-de-processos';
import { Processo } from './models/processo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public processos: FilaDeProcessos;
private interval;
public ps: Array<Processo>;
private counter;
    constructor()
    {
      this.processos = new FilaDeProcessos();
      let processo: Processo;
      
      processo = new Processo("p1",10);
      this.processos.put(processo);
      processo = new Processo("p2",4);
      this.processos.put(processo);
      processo = new Processo("p3",8);
      this.processos.put(processo);
      this.ps = this.processos.getAll();

      this.interval = setInterval(() => {this.rodaProcesso()},1000);
      this.counter = 1;
    }

    public rodaProcesso(){
      console.log("Iniciou o interval");
      
      let processo = this.processos.getAtual();

      if(processo == null)
        return;

      processo.reduzir(1);

      if(processo.finalizou()){
        this.processos.remove(processo);
         this.processos.next();
        this.counter = 0;
      }

      if(this.processos.size() >= 0 && this.counter >= 2)
      {
        this.processos.next();
        this.counter = 0;
      }        
        this.counter++
        
    }


    public adicionarProcesso(fromData: any){
      
      let processo = fromData.value;
      console.log(JSON.stringify(processo));
      
      this.processos.put(new Processo(processo.nome,processo.tamanho));
    }
}
