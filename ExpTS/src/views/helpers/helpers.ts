import { Prof } from './helpersTypes'

export function listaProfs(profs: Array<Prof>){
    const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
    return `<ul>${list.join('')}</ul>`;
}