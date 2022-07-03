// truyen data tu parent to child

// index.html -> chua index.js -> render content App component to div #root

function app() {

    let app_variable = "parent to child";

    const handleDelete = function(dataFromChid){
        console.log('dataFromChid', dataFromChid);
    }


    child(handleDelete);

}


function child(callback) {

    const childData = 'child data';
    callback(childData);

}

app();


// truyen data tu child -> parent 

