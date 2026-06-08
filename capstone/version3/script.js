// AOS

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
    If mental health remains hidden,
    many pastor's kids may experience
    burnout, isolation, and pressure
    to appear perfect.
    </p>

    `;
});

supportBtn.addEventListener("click", () => {

    futureText.innerHTML = `

    <h3>Future With Support</h3>

    <p>
    Churches could create healthier
    environments through counseling,
    support groups, and open discussions
    about mental health.
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

const ctx =
document.getElementById("myChart");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Pressure",
            "Stigma",
            "Isolation",
            "Support"

        ],

        datasets: [{

            label:
            "Mental Health Factors",

            data: [

                20,
                33,
                19,
                22

            ]

        }]
    },

    options: {

        responsive:true,

        scales:{
            y:{
                beginAtZero:true,
                max:50
            }
        }
    }
});