// truyen data tu parent to child

// index.html -> chua index.js -> render content App component to div #root

function app() {

    let app_variable = "parent to child";
    child(app_variable); // prop

}


function child(parentToChild) {

    console.log("parent to child", parentToChild);

}

app();

