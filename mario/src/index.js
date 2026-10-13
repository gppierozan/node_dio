const player1 = {
    nome : "Mario",
    velocidade : 4,
    manobrabilidade : 3,
    poder : 3,
    pontos : 0
}

const player2 = {
    nome : "Luigi",
    velocidade : 3,
    manobrabilidade : 4,
    poder : 4,
    pontos : 0
}

async function rollDice(params) {
    return Math.floor(Math.random() * 6) + 1; // floor aredonda, é de 0 a 5 por isso +1
}

async function getRandomBlock() {
    let random = Math.random()
    let result
    
    switch (true){
        case random < 0.33:
            result="RETA"
            break
        case random < 0.66:
            result="CURVA"
            break
        default:
            result="CONFRONTO"
        
    }

    return result
}

async function logRollResult(charName, block, diceResult,attribute) {
    console.log(`${charName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult+attribute}`);
}

async function playRaceEngine(char1,char2) { //os personagens como parametros
    for(let round=1;round<=5;round++){
        console.log(`🏁 Rodada ${round}`)

        //sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);
        
        //rolar os dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //teste de habilidade
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + char1.velocidade
            totalTestSkill2 = diceResult2 + char2.velocidade

            await logRollResult(player1.nome,"velocidade",diceResult1,char1.velocidade)
            await logRollResult(player2.nome,"velocidade",diceResult2,char2.velocidade)
            
        }
        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + char1.manobrabilidade
            totalTestSkill2 = diceResult2 + char2.manobrabilidade

            await logRollResult(player1.nome,"manobrabilidade",diceResult1,char1.manobrabilidade)
            await logRollResult(player2.nome,"manobrabilidade",diceResult2,char2.manobrabilidade)
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + char1.poder
            let powerResult2 = diceResult2 + char1.poder

            console.log(`${char1.nome} confrontou com ${char2.nome} `);

            await logRollResult(player1.nome,"poder",diceResult1,char1.poder)
            await logRollResult(player2.nome,"poder",diceResult2,char2.poder)

            if ((powerResult1 > powerResult2) && (char2.pontos > 0) ){
                console.log(`${char1.nome} venceu o confronto! ${char2.nome} perdeu 1 ponto 🐢`);
                char2.pontos--
            }
            //char2.pontos -= powerResult1 > powerResult2 && char2.pontos > 0 ? 1 : 0 
            //se a condição é verdadeira diminui o primeiro valor após a interrogação, senão o que vem após os :
            /*if (powerResult1 > powerResult2){
                if(char2.pontos > 0){
                    char2.pontos--
                }
            }*/
           if ((powerResult2 > powerResult1) && (char1.pontos > 0) ){
                console.log(`${char2.nome} venceu o confronto! ${char1.nome} perdeu 1 ponto 🐢`);
                char1.pontos--
            }
           //char1.pontos -= powerResult2 > powerResult1 && char1.pontos > 0 ? 1 : 0 
           /* if (powerResult2 > powerResult1){
                if(char1.pontos > 0){
                    char1.pontos--
                }
            }*/

            console.log(
                powerResult1 === powerResult2 ? 
                "Confronto empatado! Nenhum ponto foi perdido." 
                : "")
            
            /*if (powerResult1 === powerResult2){
                console.log("Confronto empatado! Nenhum ponto foi perdido.");
            }*/
            
        }

        //verifica o vencedor
        if (totalTestSkill1 > totalTestSkill2){
            console.log(`${char1.nome} marcou um ponto!`)
            char1.pontos++
        } else if (totalTestSkill2 > totalTestSkill1){
            console.log(`${char2.nome} marcou um ponto!`)
            char2.pontos++
        }

        console.log("-------------------------------------------------")
    }
}

async function declareWinner(char1,char2) {
    console.log("Resultado Final: ")
    console.log(`${char1.nome}: ${char1.pontos} ponto(s)`);
    console.log(`${char2.nome}: ${char2.pontos} ponto(s)`);
    
    if(char1.pontos>char2.pontos){
        console.log(`\n ${char1.nome} venceu a corrida! Parabéns! 🏆`);        
    } else if(char2.pontos>char1.pontos){
        console.log(`\n ${char2.nome} venceu a corrida! Parabéns! 🏆`);        
    } else{
        console.log(`A corrida terminou em empate! 🥱`);        
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.nome} e ${player2.nome} está começando`)

    await playRaceEngine(player1,player2)
    await declareWinner(player1,player2)
})()
//colocar a função entre parenteses deixa ela auto invocavel