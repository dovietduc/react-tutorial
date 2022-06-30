

function HelloComponent() {

    // const hello = function(name) {

    //     const handle = function() {
    //         console.log('name', name);
    //     }

    //     // console.dir(handle);

    //     return handle;
    // }

    const hello = name => () => {
        console.log('name', name);
    }

    const handeHello = function(name) {
        console.log('name', name);
    }


    return (
        <div>
            <button onClick={() => handeHello('react')}>React</button>

            <button onClick={() => handeHello('router')}>router</button>


            <button onClick={hello('redux')}>Reduct</button>
            <button onClick={hello('context')}>Context</button>
        </div>
    )
}

export default HelloComponent;


// b1. Chạy function HelloComponent
   // Nó sẽ tạo closure cho handle button react
   // khi chayj đến {hello('react') nó sẽ tạo ra closure (hello) 
   //{name: 'react'}
    // khi chayj đến {hello('redux') nó sẽ tạo ra closure (hello) 
   //{name: 'reduct'}
     // khi chayj đến {hello('context') nó sẽ tạo ra closure (hello) 
   //{name: 'context'}

// kết thúc quá trình chạy lần đầu với    HelloComponent



