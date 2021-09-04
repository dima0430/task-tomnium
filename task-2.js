class DB {
    constructor(){
        this.db={};
            this.selectModel=null;
    }
    model(name){
        if(this.db.hasOwnProperty(name)){
            this.selectModel =name
            return this
        }
        else{
            this.db={...this.db,[name]:{lastId:0,items:[]}};
                this.selectModel =name
            return this;
        }
    }  
}
class Model extends DB{
    create(obj){
        this.db[this.selectModel]={
            items:[...this.db[this.selectModel].items,{id:this.db[this.selectModel].lastId,...obj}],
            lastId:++this.db[this.selectModel].lastId
        }
    }
    delete(id){
        this.db[this.selectModel]={
            ...this.db[this.selectModel],
            items:this.db[this.selectModel].items.filter(obj=>obj.id!==id)
        }
    }
    get(id){
        return (this.db[this.selectModel].items.filter(obj=>obj.id===id))[0]
    }
    update(id,obj){
        this.db[this.selectModel]={
            ...this.db[this.selectModel],
            items:this.db[this.selectModel].items.map(obj1=>obj1.id===id?{...obj1,...obj}:obj1)
        }
    }
}

const db =new Model()
const obj1=db.model('model1')
obj1.create({name:1})