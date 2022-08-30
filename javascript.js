
            let sound = new Audio('recursos/fondo.mp3');
            btn.addEventListener('click',()=>{
                sound.play();
            });



        
            function ShowDiv(){
               
            
                    document.getElementById("subBody").style.display="block";
                    document.getElementById("btn").style.display="none"
                    document.getElementById("btncerrar").style.display="block";                    
                    document.getElementById("cabecera").style.marginTop="0px";
                    document.getElementById("idfooter").style.marginBottom="0px";          
                   
        
            }
            function HideDiv()
            {
                document.getElementById("subBody").style.display="none";
                document.getElementById("btn").style.display="block"
                document.getElementById("btncerrar").style.display="none";                    
                document.getElementById("cabecera").style.marginTop="100px";
                document.getElementById("idfooter").style.marginBottom="100ppx";  

            }
        
        
        
        
        
        
        
    