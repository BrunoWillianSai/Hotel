export interface Reserva {
    id: number;           
    hospede: string;           
    quarto: 'Simples' | 'Duplo' | 'Suíte';
    datae: string;        
    datas: string;
    npessoas: number;
    cafe: boolean;
    obs: string;
}  
