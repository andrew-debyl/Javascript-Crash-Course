//fetch("https://jsonplaceholder.typicode.com/users/1")

//const emailRef = document.querySelector(".email");

// TWO WAYS TO UNLOCK A PROMISE 
    // 1. Then
    // fetch("https://jsonplaceholder.typicode.com/users/1")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((response1) => {
    //     emailRef.innerHTML = response1.email;
    //   });

// 2. Async/Await
    // async function getData() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    //     const response1 = await response.json()

    //     emailRef.innerHTML = response1.email;
    // }

    // getData()


//Making a Promise for Subscription Status

    // const subStat = document.querySelector(".status")

    // function getSubStatus() {
    //     return new Promise((resolve, reject) => {
    //         resolve("VIP")
    //     })
    // }

    // async function unlockPromise() {
    //     subStat.innerHTML = await getSubStatus()
    // }

    // unlockPromise()


//Challenge from Video

    // const videoRef = document.querySelector(".video")

    // function getVideo (subStatus) {
    //     return new Promise((resolve, reject) => {
    //         if (subStatus === "VIP") {
    //             resolve("show video")
    //         }
    //         else if (subStatus === "FREE") {
    //             resolve("show trailer")
    //         }
    //         else {
    //             reject("no video")
    //         }
    //     })
    // }

    // async function unlockPromise() {
    //     try {
    //         console.log(await getVideo("f"))
    //     }
    //     catch(e) {
    //         console.log(e)
    //     }
    // }

    // unlockPromise()