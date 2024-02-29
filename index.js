// code your solution here
function superbowlWin(array) {
    let win = array.find(function(s) {return s.result === "W"});
    return win ? win.year : undefined;
}
