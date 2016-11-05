

function Collection(){

    Collection.prototype.count = 0;
    Collection.prototype.collection = {

    }

    Collection.prototype.getCount = function(){
        return this.count;
    }

    Collection.prototype.setCount = function(newCount){
        this.count = newCount;
    }

    Collection.prototype.add = function(K,V){
        if(this.collection[K]!=undefined){
            // is it possible to do like this.collection.K ?
            return undefined;
        }
        this.collection[K] = V;
        this.setCount(this.getCount+1);
    }

    Collection.prototype.getElement = function(index){
        return this.collection[index];
    }

    Collection.prototype.update = function(K,V){
        if(this.collection[K]==undefined){
            this.add(K,V);
        }
        else{
            this.collection[K]=V;
        }
    }

    Collection.prototype.delete = function(K){
        if(this.collection[K]==undefined){
            return undefined;
        }
        delete this.collection[K];
        this.setCount(this.getCount-1);
    }
}
