

const btnCreate = document.getElementById("btnMatrix")
let matrix = document.getElementById("sel")



function insertGameHero(arr,hero){
        let x = parseInt(Math.random() * (arr.length))
        let y =parseInt(Math.random() * (arr.length))
               if(arr[x][y] ===0){
                arr[x][y] = hero
               }else{
                return insertGameHero(arr,hero)
               }
        return arr
        }

        function heroCount(arr,hero,percent){
                let matrix = +document.getElementById("sel").value
                let resultPracent = parseInt((matrix*percent)/100)
                for(let i =0; i<resultPracent; i++){
                        insertGameHero(arr,hero)
                }
        }

     


        btnCreate.addEventListener("click", function(){
            let matrix = +document.getElementById("sel").value
            let arr = new Array(matrix)
                    arr = arr.fill(0).map(function(val,i){
                    val =[]
                    val.length = arr.length;
                    val.fill(0)
                   
            return val
    })
    console.log(arr)
    
            heroCount(arr,"wolf",60)
            heroCount(arr,"fence",40)
            insertGameHero(arr,"rabbit")
            insertGameHero(arr,"house")     
    return arr
    })
