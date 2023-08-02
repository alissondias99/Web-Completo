//Referente a aula 247

function historiaComplexa(personagem='Fido', acao='correr em circulos', dono='Pedro'){//Parâmetros default são valores padrões definidos nos parâmetros das funções.
    console.log(`O cachorro ${personagem}, adora ${acao} quando seu dono ${dono} está perto`)
}

historiaComplexa('Dino', 'latir', 'Rob')
historiaComplexa(undefined, 'latir', 'Rob')
historiaComplexa(undefined, undefined, undefined)