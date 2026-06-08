// AOS

const overlay = document.querySelector("#overlay");
const closePopup = document.querySelector("#closePopup");

closePopup.addEventListener("click", () => {
    overlay.style.display = "none";
    });
    
AOS.init();



new Granim({

    element: '#granim-canvas',

    direction: 'diagonal',

    isPausedWhenNotInView: true,

    states: {

        "default-state": {

            gradients: [

                ['#4e4376','#2b5876'],

                ['#134E5E','#71B280'],

                ['#42275a','#734b6d'],

                ['#141E30','#243B55']

            ],

            transitionSpeed: 5000
        }
    }
});



const noChangeBtn =
document.querySelector("#noChangeBtn");

const supportBtn =
document.querySelector("#supportBtn");

const futureText =
document.querySelector("#futureText");

noChangeBtn.addEventListener("click", () => {

    futureText.innerHTML = `

  <h3>Future Without Change</h3>

    <p>
        In this future, mental health continues to be a difficult topic within many Korean church communities. Pastor's kids still feel pressure to appear strong, obedient, and spiritually mature, even when they are struggling internally. Because of stigma and fear of judgment, many choose not to seek help or talk openly about anxiety, depression, burnout, or identity struggles.
    </p>

    <p>
        As these pressures continue, some young people may become disconnected from their faith communities or feel isolated from their families. Churches focus  on maintaining traditions and appearances rather than addressing emotional well-being. The cycle of silence continues into future generations, making it difficult for meaningful change to occur.
    </p>

    `;
});

supportBtn.addEventListener("click", () => {

    futureText.innerHTML = `

    <h3>Future With Support</h3>

<p>
        In this future, churches recognize mental health as an important part of overall well-being. Church leaders openly discuss topics such as stress, anxiety, burnout, and counseling. Pastor's kids feel more comfortable sharing their experiences without fear of shame or judgment.
    </p>

    <p>
        Support groups, mentorship programs, and mental health resources become common within church communities. Families and congregations learn how to balance faith with emotional health creating environments where young people feel seen, heard, and supported. Future generations grow up with healthier relationships, stronger identities, and a deeper sense of belonging within their communities.
    </p>

    `;
});



const reflection =
document.querySelector("#reflection");

const submitReflection =
document.querySelector("#submitReflection");

const message =
document.querySelector("#message");

window.addEventListener("load", () => {

    const saved =
    localStorage.getItem("reflection");

    if(saved){

        reflection.value = saved;

        message.textContent =
        "Reflection loaded.";
    }

});

submitReflection.addEventListener("click", () => {

    if(reflection.value.trim() === ""){

        message.textContent =
        "Please write a reflection.";

        return;
    }

    localStorage.setItem(
        "reflection",
        reflection.value
    );

    message.textContent =
    "Reflection saved!";
});


// CHART

const ctx1 = document.getElementById("myChart1");

new Chart(ctx1, {
    type: "bar",
    data: {
        labels: [
            "Asian Americans with Mental Health Issues",
            "Asian Americans Seeking Help",
            "Older Korean Americans with Depression",
            "Older Korean Americans Accessing Help"
        ],
        datasets: [{
            label: "Percent (%)",
            data: [10, 10, 34, 6.5],
            backgroundColor: [
                "#9e88f4",
                "#b5a2f8",
                "#7c68db",
                "#d6cbff"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Mental Health Needs vs Professional Help-Seeking"
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 40
            }
        }
    }
});

const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
    type: "pie",
    data: {
        labels: [
            "Do Not Need Therapy",
            "Don't Know Any Counselors",
            "Too Expensive",
            "Unsure How Counseling Helps",
            "Too Busy",
            "Saving Face"
        ],
        datasets: [{
            data: [46, 21, 19, 10, 2, 2],
            backgroundColor: [
                "#88b7f4",
                "#765bd6",
                "#68db9e",
                "#ffcbfc",
                "#a54776",
                "#286451"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Reasons Korean American Church Leaders Do Not Seek Therapy"
            },
            legend: {
                position: "bottom"
            }
        }
    }
});