var userLogin = true;
// use to suess or filer and asyc task
function logIn() {
    var promise = new Promise((resolve, reject) => {

        // still wait 1 second
        setTimeout(() => {
            // promise resolve or reject
            if (userLogin) {
                resolve("message here ");
            } else {
                // reject
                reject();
            }
        }, 1000);
    });
    setTimeout(() => {
        userLogin = false;

    }, 5000);
    return promise;
}
logIn().then((successMessage) => { console.log(successMessage); }).catch(() => { console.log("not logged in"); })