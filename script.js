// TODO: add button for form to get input
/**
 * checks to see if an element in  an array is a number
 * @param  {[type]}  num [description]
 * @return {Boolean}     [description]
 */
function isNum(num) {
    return !isNaN(num);
}
/**
 * takes in an array of strings and converts them to int
 * Then sums them up and returns the sum
 * @param  {[type]} inHours [description]
 * @return {[type]}         [description]
 */
function calucateTtlHrs(inHours) {
    var ttlHrs = 0;
    for (var i = 0; i < inHours.length; i++) {
        inHours[i] = +inHours[i];
        ttlHrs+=inHours[i];
    }
    return ttlHrs;
}
/**
 * returns the
 * @param  {[type]}  grade [description]
 * @return {a float that is the grade quality pts}       [description]
 */
function isLetterGrade(grade) {
    if(grade == "A"){
        return 4;
    }
    else if (grade == "B+") {
        return 3.5;
    }
    else if (grade == "B") {
        return 3;
    }
    else if (grade == "C+") {
        return 2.5;
    }
    else if (grade == "C") {
        return 2;
    }
    else if (grade == "D") {
        return 1;
    }
    else if (grade == "F") {
        return 0;
    }
}
/**
 * used to calucate the total grade pts
 * @param  {[type]} gradePoints [description]
 * @param  {[type]} hrs         [description]
 * @return {double that reprecents the total gradepts}             [description]
 */
function calculateTotalGradePts(gradePoints, hrs) {
    var ttl = 0;
    for (var i = 0; i < gradePoints.length; i++) {
        ttl+=(gradePoints[i] * hrs[i]);
    }
    return ttl;
}
/**
 * calcuatles GPA
 * @param  {[type]} ttlGradPts  [description]
 * @param  {[type]} creditHours [description]
 * @return {[type]}             [description]
 */
function calculateGPA(ttlGradPts, creditHours) {
    return (ttlGradPts / creditHours);
}
///////////////////end functions

// get text from area an use the string
window.onload = function () {
    var btn = document.getElementById('usrBtn');

    btn.addEventListener('click', function() {
        var inputstr = document.getElementById('textA').value;
        var split = inputstr.split(/[\s]/);
        var hrs ="";
        var letterPts = new Array();

        for (var i = 0; i < split.length; i++) {
            if (isNum(split[i])) {

                hrs = hrs + " " + split[i];
            }
            //check to see if we get a leeter grade and then push the value
            //to the letterPts array
            if(split[i].length < 2 && isNaN(split[i])){
                console.log("grade" + split[i]);
                letterPts.push(isLetterGrade(split[i]));
            }
            //letterPts[i] = isLetterGrade(split[i]);
        }
        var hrs2 = hrs.trim();
        var hours = hrs2.split(/[\s]/);
        var totalHrs = calucateTtlHrs(hours);
        console.log(totalHrs);
        var totalGradePts = calculateTotalGradePts(letterPts, hours);
        console.log(totalGradePts);
        var usrGrdPts = document.getElementById('totaGradePts');
        usrGrdPts.innerHTML+=totalGradePts;
        //console.log(usrGrdPts);
        var usrttlHrs = document.getElementById('totalHours');
        usrttlHrs.append(totalHrs.toString());
        var usrGPA = document.getElementById('GPA');
        usrGPA.append(calculateGPA(totalGradePts, totalHrs).toString());
    });
}
