
function Collection(name){
    this.name=name;
    this.count = 0;
    this.collection = {

    }

    this.getName = function(){
        return this.name;
    }
    this.getCount = function(){
        return this.count;
    }

    this.setCount = function(newCount){
        this.count = newCount;
    }

    this.add = function(K,V){
        if(this.collection[K]!=undefined){
            return undefined;
        }
        this.collection[K] = V;
        this.setCount(this.getCount+1);
    }

    this.getElement = function(index){
        return this.collection[index];
    }

    this.update = function(K,V){
        if(this.collection[K]==undefined){
            this.add(K,V);
        }
        else{
            this.collection[K]=V;
        }
    }

    this.delete = function(K){
        if(this.collection[K]==undefined){
            return undefined;
        }
        delete this.collection[K];
        this.setCount(this.getCount-1);
    }
}
