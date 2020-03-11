//==============================================================================
//=============================INSERTION_SORT===================================
//==============================================================================

function insertionSort(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    let position = i;
    let tempValue = inputArray[i];
    while ( (position > 0) && (inputArray[position - 1] > tempValue) ) {
      inputArray[position] = inputArray[position - 1];
      position--;
    }
    inputArray[position] = tempValue;
  }
  return inputArray;
}

//==============================================================================
//========================INSERTION_SORT__[[TEST]]==============================
//==============================================================================

let testArray = [34,7,66,58,90,12,14,2,43,65,28,75,98,36,49];

console.log(insertionSort(testArray));

//==============================================================================
//================================END_ALL=======================================
//==============================================================================