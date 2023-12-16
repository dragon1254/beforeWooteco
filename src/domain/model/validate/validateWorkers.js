import ERROR from "../message/error"

class validateWorkers{
    checkWorkers(workers){
        if(workers.length < 5){
            throw new Error(ERROR.allNumberRange);
        }
        if(workers.length > 35){
            throw new Error(ERROR.allNumberRange);
        }
        this.checkContinuous(workers);
    }
    checkContinuous(workers){
        if(workers[0] === workers[1]){
            throw new Error(ERROR.continuous);
        }
        for(let i = 1; i < workers.length-1; i++){
            if(workers[i] === workers[i+1]){
                throw new Error(ERROR.continuous);
            }
        }

    }
}

export default validateWorkers