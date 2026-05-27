
function validatePhone() {

    let phone = document.getElementById("phone").value;

    if (phone.length != 10) {
        alert("Phone number must be 10 digits");
    }
}


function showFee() {

    let eventType = document.getElementById("eventType");
    let fee = eventType.value;

    document.getElementById("feeDisplay").innerHTML =
        "Event Fee: ₹" + fee;

    
    localStorage.setItem("preferredEvent", fee);
}


function showConfirmation() {

    document.getElementById("outputMessage").value =
        "Registration submitted successfully!";
}


function enlargeImage(img) {

    if (img.style.transform == "scale(1.5)") {
        img.style.transform = "scale(1)";
    } else {
        img.style.transform = "scale(1.5)";
    }
}


function countCharacters() {

    let text = document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        text.length;
}

function videoReady() {

    document.getElementById("videoMessage").innerHTML =
        "Video ready to play";
}


window.onbeforeunload = function () {
    return "Your form may not be saved.";
};


function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                document.getElementById("locationResult").innerHTML =
                    "Latitude: " +
                    position.coords.latitude +
                    "<br>Longitude: " +
                    position.coords.longitude;
            },

            function (error) {

                if (error.code == error.PERMISSION_DENIED) {
                    alert("Location permission denied");
                }

                else if (error.code == error.TIMEOUT) {
                    alert("Location request timed out");
                }
            },

            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );
    }
}


window.onload = function () {

    let savedEvent = localStorage.getItem("preferredEvent");

    if (savedEvent) {
        document.getElementById("eventType").value =
            savedEvent;
    }
};

function clearPreferences() {

    localStorage.clear();
    sessionStorage.clear();
    document.getElementById("locationResult").innerHTML = "";

    alert("Preferences cleared");
}


console.log("Event Management Portal Loaded Successfully");