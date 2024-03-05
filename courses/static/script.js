const information_contents = [
    `<p>I am the master of Golang(GO LANGUAGE) I know everything needed to make a website function efficiently. I didn't stop with the web. I went beyond with the most popular Golang framework called beego. I even know the deployment, server and security. I will give you 100% web solution.</p>`,
    `<p>I am also proficient in using Excel, SQL,Power BI IBM Cognos and Tableau. Assisted data scientists with analysis that increased sales performance by 21%.Spearheaded in-depth analysis of stockroom operations that led to a 14% decrease in operating costsWorked closely with the company to identify customer needs and demandsSoftware development Adaptability Teamwork I have experience working with large data sets and statistical analysis. 
</p>`,
    `<p>Coordinated with the product and marketing teams to determine what kind of client interactions resulted in maximized service opt-ins, increasing conversions by 18%</p><br>`,
];

const popup = document.querySelector('.popup');
const popupChild = document.querySelector('.popup__child');
const popupToggle = document.querySelector('.popup__toggle');
const experienceItemEle = document.querySelectorAll('.popup__div');

//eventlistener for opening the popup and displaying the rightful content
experienceItemEle.forEach((ele) => {
    ele.addEventListener('click', function(e) {
        const targetNum = Number(e.target.closest('.popup__div').dataset.item);
        console.log(targetNum);
        popup.classList.add('popup__show');
        popupChild.innerHTML = information_contents[targetNum - 1];
    });
});

//eventlistener for closing the popup
popupToggle.addEventListener('click', function() {
    popup.classList.remove('popup__show');
});

const form = document.getElementById('Submit');