function converterFrase(){
    let frase = document.getElementById('frase').value;
    let comprimentofrase = frase.toString().length;
    
    let arrayLetras = [ 'A', 
                        'B', 
                        'C',
                        'D', 
                        'E', 
                        'F',
                        'G', 
                        'H', 
                        'I',  
                        'J', 
                        'K', 
                        'L', 
                        'M', 
                        'N', 
                        'O', 
                        'P', 
                        'Q', 
                        'R', 
                        'S', 
                        'T', 
                        'U', 
                        'V', 
                        'W', 
                        'X', 
                        'Y', 
                        'Z',
                        ' '
                     ];
    let arrayCorrespondency = [ 
                        '2',
                        '22',
                        '222',
                        '3',                        
                        '33',                       
                        '333',                      
                        '4',                      
                        '44',                     
                        '444',                    
                        '5',                    
                        '55',                    
                        '555',                    
                        '6',                    
                        '66',                   
                        '666',                  
                        '7',                  
                        '77',                  
                        '777',                  
                        '7777',                 
                        '8',                 
                        '88',                 
                        '888',               
                        '9',               
                        '99',               
                        '999',              
                        '9999',            
                        '0'
                     ];
    let resultado = "";
    let ultimo = ""
    for ( let i = 0; i < comprimentofrase; i++ ){
        let posicao = arrayLetras.indexOf(frase[i].toString().toUpperCase());
        let comparacao = arrayCorrespondency[posicao];
        if ( comparacao[0] == ultimo ){
            resultado += '_';
        }
        resultado += arrayCorrespondency[posicao];
        ultimo = arrayCorrespondency[posicao];
        ultimo = ultimo[0];
     }
    //  document.getElementById('result').innerHTML="<p>"+resultado+"</p>";
     document.getElementById('result').innerHTML=`${resultado}`;
}