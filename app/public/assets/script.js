surveyComp = (surveyData, serverData) => {
    // An array to store the differences for each index
    var indexArr = [];

    serverData.forEach((member) => {
        // A function that tallies the total difference between two arrays
        compare = (arr1, arr2) => {
            var total = 0;

            arr1.forEach((element, index) => {
                total += Math.abs(element - arr2[index]);
            });

            indexArr.push(total);
        };

        // Compare the survey results to every member in the system
        compare(surveyData.memberQuiz, member.memberQuiz);
    });

    // Log the closest match based on who has the smallest difference
    var matchIndex = indexArr.indexOf(Math.min(...indexArr));

    $("#friendImg").attr("src", serverData[matchIndex].memberPicture);
    $("#friendList").append(`<li class="list-group-item"><b>Name:</b> ${serverData[matchIndex].memberName}</li>`);
    $("#friendList").append(`<li class="list-group-item"><b>Age:</b> ${serverData[matchIndex].memberAge}</li>`);
    $("#friendList").append(`<li class="list-group-item"><b>Location:</b> ${serverData[matchIndex].memberLocation}</li>`);

    console.log(serverData[matchIndex].memberName);
};