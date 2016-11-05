// TODO: study class creation via Constructor DONE
// TODO: study combined class definition DONE
// TODO: private/public member of class DONE
// Any variables defined via var or normal function definitons are private
// this or prototype => public
// TODO: study default parameters DONE check if undefined via ternary operator
//function foo(a, b)
//{
//  a = typeof a !== 'undefined' ? a : 42;
//  b = typeof b !== 'undefined' ? b : 'default_b';
//}
// TODO: study RegExp js form validation
// TODO: drag and drop
// TODO: html canvas and js game

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
