initArea();
function initArea(){
    let stroke = 0;
    for(let j=0;j<8;j++){
        for(let i=0;i<8;i++){
            const newDiv = document.createElement("div");
            const shashka = document.createElement("div");
            shashka.id = i+j;
            newDiv.id = i+stroke;
            newDiv.className = "area";
            if(i%2==0){
                if(j%2==0){
                    newDiv.style.backgroundColor = '#666666';
                    
                }
                else{
                    newDiv.style.backgroundColor = '#1B1A1D';
                  
                }
            }
            else{
                if(j%2==0){
                    newDiv.style.backgroundColor = '#1B1A1D';
                   
                }
                else{
                    
                    newDiv.style.backgroundColor = '#666666';
                   
                }

            }
            document.getElementById("game").appendChild(newDiv);
            if(i<=8 && j<3){
                document.getElementById(i+stroke).appendChild(shashka);
                
                if(document.getElementById(i+stroke).style.backgroundColor == 'rgb(27, 26, 29)'){
                    shashka.className = "blueshashka";
                    shashka.style.backgroundColor = '#2E6C90';

                }
            }
            if(i<=8 && j>4){
                document.getElementById(i+stroke).appendChild(shashka);
                if(document.getElementById(i+stroke).style.backgroundColor == 'rgb(27, 26, 29)'){
                    shashka.className = "greenshashka";
                    shashka.style.backgroundColor = '#2E903B';
                }
            }
            console.log(document.getElementById(i+stroke).style.backgroundColor);
        }
        stroke+=10;
    }

    
}