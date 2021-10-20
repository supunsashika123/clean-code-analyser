function negativeConditionalTest(param) {
  if (!param) {
    //do this
  }
}

function commentsLengthTest() {
  //here is a comment
  //here is
  //a
  //large
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
  //comment
}

function paramsTest(param1, param2, param3, param4) {}

function paramsTest({ param1, param2, param3, param4 }) {}

function mentalMappingTest() {
  let cars = ["car1", "car2"];

  cars.map((c) => c);
  cars.filter((carvv) => carvv);
}

function explanatoryVariablesTest(params) {
  function misspelledunctionNameeee(params) {}

  let mispelledVar = "";
  const mispellledVar = "";
  var misssspelledVar = "";
}

function eventHandlerFunctionsTest() {
  const handleButtonClick = () => {};
  
  const clickedFunction = () => {};

  if (1) {
    return (
      <div>
        <button onClick={clickedFunction}></button>
      </div>
    );
  }

  if (2) {
    return (
      <div>
        <button onClick={handleButtonClick}></button>
      </div>
    );
  }

  if (3) {
    return (
      <div>
        <button onClick={()=>clickedFunction()}></button>
      </div>
    );
  }
}
