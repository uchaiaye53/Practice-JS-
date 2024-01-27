function myComponent(){
    let state;

    function setState(s){
        state = s;
    }

    function getState(){
        return state;
    }

    return [setState, getState];
}


const [set,get] = myComponent();

set(30);

console.log(get());