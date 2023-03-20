findsmallestno = function (arryofnumbers) {
    let smallnumber;
    for (let i = 0; i < arryofnumbers.length; i++) {
        arrnumber = arryofnumbers[i]
        if (i = 0) {

            smallnumber = arryofnumbers[i]

        }
        if (arrnumber < smallnumber) {
            smallnumber = arrnumber
        }
    }

    return smalllnumber


}
console.log(findsmallestno([1, 2, 2, 3, 3]))



