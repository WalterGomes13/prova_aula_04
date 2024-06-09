<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var num = parseInt(prompt("Digite o seu número: "))
        var fatorial = 1
        var fibonaci = 1
        var fib = 0
        var array = []
        for(i=num; i>0;i--){
            fatorial = fatorial*i
        }
        
        for(i=num; i>0;i--){
            array.push(fibonaci)
            let valor = fib
            fib = fibonaci
            fibonaci += valor
            
            
        }
        
        console.log(`O fatorial é ${fatorial}`)
        
        for(numero of array){
            console.log(`${numero}`)
        }
    </script>
</body>
</html>
