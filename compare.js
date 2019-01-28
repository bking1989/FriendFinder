var arr1 = [2,2,2,2,2];
var arr2 = [1,1,1,1,1];

compare = (arr1, arr2) => {
    var total = 0;

    arr1.forEach((element, index) => {
        total += Math.abs(element - arr2[index]);
    });

    console.log(total);
};

compare(arr1, arr2);