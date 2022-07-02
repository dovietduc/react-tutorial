import React from 'react'

function Child({parentToChild, name}) {

    const {parentToChild, name} = props;

    console.log("parentToChild", parentToChild);

  return (
    <div>
        Child
    </div>
  )
}

export default Child