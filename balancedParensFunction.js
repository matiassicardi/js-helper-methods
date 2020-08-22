function balacedParens(string) {
    return !string.split("").reduce(function(previuos, char) {
        if (previuos < 0) {return previuos}//chequeamos que la primer llave no venga incompleta
        if (char === "(") {return ++previuos;}//sumamos 1 por cada llave que comienza
        if (char === ")") {return --previuos;}//restamos 1 por cada llave que cierra
        return previuos;
    }, 0);
};//el objetivo es que el balance de 0 sin comenzar por una llave de cierre
//las siguientes ejecuciones darán 'true'
balacedParens("(())")
balacedParens("()()")
//las siguientes ejecuciones darán 'false'
balacedParens("(()")
balacedParens(")()")