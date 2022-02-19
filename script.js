

function redir() {
    window.location.href = "https://www.unicef.ca/en/search?search=" + document.getElementById("questions").value;
}

let timesClicked = 0;
let swtichChart = document.getElementById("btn2");
console.log(swtichChart);
function switchChart (){
    timesClicked ++;    
    console.log("yels");
    if (timesClicked % 2 == 1) {
        document.getElementById("chart").innerHTML = '<iframe scrolling="no" width="800px" frameborder="0" height="700px" src="https://sdmx.data.unicef.org/databrowser/embed.html?df=UNICEF:CCRI(1.0)&dq=.POV_INEQUITY&chart=N4IgxgFghgTgLgYQPYDsBmBLA5iAXKOATwAcBTPEAI1hABoQli4NUBnPUamCgJQFEAYgH0AgvxEgAvvWZwANuVwhiSAG6l4hAARQUAEy0YUpAI4BXKHIxEdMJGf1a4EUloDuSGHIOodW1mCWrkhoWgAMALQAjGF0IKxmlLIKFFKSQA"></iframe>';
    } else {
        document.getElementById("chart").innerHTML = '<iframe scrolling="no" width="800px" frameborder="0" height="700px" src="https://sdmx.data.unicef.org/databrowser/embed.html?df=UNICEF:CCRI(1.0)&dq=.POV_INEQUITY&chart=N4IgxgFghgTgLgYQPYDsBmBLA5iAXKOATwAcBTPEOGU0gWymJABoQli4NUBnPUYmDPRiEKAJQCiAMQD6AQQmzmILqTCoAJrBG4QIAL4sOcADbkdxJADdS8QgAIoKdXYwpSARwCuUYxiIOYJE8nOzgIUjsAdyQYY2dUBzsuMB8IpDQ7AAYAWgBGTKUuTwAjI1MKfT0gA"></iframe>    </div>        ';
    }
}