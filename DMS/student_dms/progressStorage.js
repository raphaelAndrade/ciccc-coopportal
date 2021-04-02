const countChecked = () => {
    let namePage = $("#progressNamePage").text();
    switch (namePage) {
        case "careerPage":
            count = $("input[type='checkbox']").length;
            checked = $("input:checked").length;
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageCarrerPage", percentage);
            let getPercentageCareer = localStorage.getItem("PercentageCarrerPage");
            $(".progress-bar.carrerPage").css("width", getPercentageCareer + "%");
            break;
        case "orientationPage":
            count = $("input[type='checkbox']").length;
            checked = $("input:checked").length;
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageOrientation", percentage);
            let getPercentageOrientation = localStorage.getItem("PercentageOrientation");
            $(".progress-bar.orientationPage").css("width", getPercentageOrientation + "%");
            break;
        case "termPage":
            count = $("input[type='checkbox']").length;
            checked = $("input:checked").length;
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageTerm", percentage);
            let getPercentageTerm = localStorage.getItem("PercentageTerm");
            $(".progress-bar.termPage").css("width", getPercentageTerm + "%");
            break;
        case "graduationPage":
            count = $("input[type='checkbox']").length;
            checked = $("input:checked").length;
            var percentage = parseInt(((checked / count) * 100), 10);
            localStorage.setItem("PercentageGraduation", percentage);
            let getPercentageGraduation = localStorage.getItem("PercentageGraduation");
            $(".progress-bar.graduationPage").css("width", getPercentageGraduation + "%");
            break;
    }
}

const loadProgress = () => {
    let namePage = $("#progressNamePage").text();
    switch (namePage) {
        case "careerPage":
            let getPercentageCarrer = localStorage.getItem("PercentageCarrerPage");
            $(".progress-bar").css("width", getPercentageCarrer + "%");
            break;
        case "orientationPage":
            let getPercentageOrientation = localStorage.getItem("PercentageOrientation");
            $(".progress-bar.orientationPage").css("width", getPercentageOrientation + "%");
            break;
        case "termPage":
            let getPercentageTerm = localStorage.getItem("PercentageTerm");
            $(".progress-bar.termPage").css("width", getPercentageTerm + "%");
            break;
        case "graduationPage":
            let getPercentageGraduation = localStorage.getItem("PercentageGraduation");
            $(".progress-bar.graduationPage").css("width", getPercentageGraduation + "%");
            break;
    }
    return;
}

$(document).ready(() => {
    loadProgress();
    $(".listQuestions li input").on("click", function () {
        countChecked();
    });
})

/*TODO: save checkbox status to local storage */