<!-- ==== Typing Animation ==== -->
const typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Data Engineer", "Business Analytics", "Software Engineer"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

let downloadButton = document.querySelector(".home .home-info a");
downloadButton.addEventListener("click", () => {
    const span = document.querySelector(".home .home-info a span");
    downloadButton.style.padding = '12px 50px';
    span.style.visibility = "visible";
    setTimeout(() => {
        span.style.visibility = "hidden";
        downloadButton.style.transition = ".3s ease-in-out";
        downloadButton.style.padding = "12px 35px";
    }, 3000);
})

const loader = document.getElementById("preloader");
const mainContent = document.getElementById("main")


window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 2500)

})
/*   progress bar animation   */

const java_progressBar = document.querySelector(".java-bar span");
const python_progressBar = document.querySelector(".python-bar span");
const js_progressBar = document.querySelector(".js-bar span");
const react_progressBar = document.querySelector(".react-bar span");
const angular_progressBar = document.querySelector(".angular-bar span");
const flutter_progressBar = document.querySelector(".flutter-bar span");
const html_progressBar = document.querySelector(".html-bar span");
const css_progressBar = document.querySelector(".css-bar span");
const sql_progressBar = document.querySelector(".sql-bar span");
const firebase_progressBar = document.querySelector(".firebase-bar span");
const sql_server_progressBar = document.querySelector(".sql-server-bar span");
const mongoDB_progressBar = document.querySelector(".mongo-bar span");
const rest_progressBar = document.querySelector(".rest-bar span");
const graph_progressBar = document.querySelector(".graph-bar span");
const git_progressBar = document.querySelector(".git-bar span");
const aws_progressBar = document.querySelector(".aws-bar span");
const docker_progressBar = document.querySelector(".docker-bar span");
const oop_progressBar = document.querySelector(".oop-bar span");
const data_progressBar = document.querySelector(".data-bar span");

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            setTimeout(() => {
                react_progressBar.classList.add('react');
                java_progressBar.classList.add('java');
                python_progressBar.classList.add('python');
                js_progressBar.classList.add('js');
                angular_progressBar.classList.add('angular');
                flutter_progressBar.classList.add('flutter');
                html_progressBar.classList.add('html');
                css_progressBar.classList.add('css');
            },1000);

        }
    });
});
const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            sql_progressBar.classList.add('sql');
            firebase_progressBar.classList.add('firebase');
            sql_server_progressBar.classList.add('sql-server');
            mongoDB_progressBar.classList.add('mongoDB');
            rest_progressBar.classList.add('restAPI');
            graph_progressBar.classList.add('graphQL');
            git_progressBar.classList.add('git');
            aws_progressBar.classList.add('aws');
        }
    });
});
const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            docker_progressBar.classList.add('docker');
            oop_progressBar.classList.add('oop');
            data_progressBar.classList.add('data');
        }
    });
});
observer.observe(document.querySelector('.java-bar'));
observer2.observe(document.querySelector('.sql-bar'));
observer3.observe(document.querySelector('.docker-bar'));
