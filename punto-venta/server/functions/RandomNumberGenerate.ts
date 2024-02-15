let temp: string = "";

export const genRndNumber = (min:number, max:number)=>{
    let numTemp: number; 
    numTemp = Math.floor(Math.random() * (max - min +1) + min);
    temp += numTemp.toString(); 


    if(temp.length < 8){
        genRndNumber(0,9);
    }else{
        numTemp = parseInt(temp);
        console.log(temp);
        temp = "";
    }

    //numTemp = parseInt(temp);

    return numTemp;
}