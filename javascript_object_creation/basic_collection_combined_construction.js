
// Constructor part
function Collection(name){
    this.name=name;
    this.count = 0;
    this.collection = {
        //
    }
}
// Prototype part : Collection'ın prototype' dictionary'sinie K,V pair'ler ekle
Collection.prototype = {
        constructor:Collection,
        getName:function(){
            return this.name;
        },
        getCount:function(){
            return this.count;
        },
        setCount:function(newCount){
            this.count = newCount;
        },
        add:function(K,V){
            if(this.collection[K]!=undefined){
                // is it possible to do like this.collection.K ?
                return undefined;
            }
            this.collection[K] = V;
            this.setCount(this.getCount()+1);
        },
        getElement:function(index){
            return this.collection[index];
        },
        update:function(K,V){
            if(this.collection[K]==undefined){
                this.add(K,V);
            }
            else{
                this.collection[K]=V;
            }
        }
}
// ya da direk bir şekilde de erişilebilir prototype constructor'daki gibi
Collection.prototype.delete = function(K){
    if(this.collection[K]==undefined){
        return undefined;
    }
    delete this.collection[K];
    this.setCount(this.getCount()-1);
}
