var testSurvey = {
    answers: [1,1,1,1,1]
};

var testServer = [
    {
        name: "Albert",
        answers: [1,2,3,4,5]
    },
    {
        name: "Bobby",
        answers: [5,4,3,2,1]
    },
    {
        name: "Chris",
        answers: [1,2,1,2,3]
    },
    {
        name: "Derek",
        answers: [2,3,2,3,2]
    },
    {
        name: "Edward",
        answers: [1,4,1,4,2]
    }
];

// Function to compare test to server data
surveyComp = (survey, server) => {
    // Define our index array
    var indexArr = [];

    // A function that compares the rest to all the sets on the server
    // The difference total is submitted to the index array
    compare = (arr1, arr2) => {
        var total = 0;

        arr1.forEach((element, index) => {
            total += Math.abs(element - arr2[index]);
        });

        indexArr.push(total);
    };

    // Run the test against every set on the server, and store all the difference totals in the index array
    server.forEach((element) => {
        compare(survey.answers, element.answers);
    });

    // This will print the final array
    // console.log(indexArr);

    // This will print the smallest value of final array
    // console.log(Math.min(...indexArr));

    // This will print the index of the array's smallest
    // console.log(indexArr.indexOf(Math.min(...indexArr)));

    // This will print the name of the closest match
    var matchIndex = indexArr.indexOf(Math.min(...indexArr));
    console.log(server[matchIndex].name);
};

surveyComp(testSurvey, testServer);