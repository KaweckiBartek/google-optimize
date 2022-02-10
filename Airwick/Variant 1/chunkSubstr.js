const string =
  ".sk-general-jumbotron{display:none}.banner-container{position:relative}@media only screen and (min-width: 992px){.banner-container{margin-top:40px}}.banner-container .languages{position:absolute;right:0;top:-25px;right:10px}@media only screen and (min-width: 992px){.banner-container .languages{top:-5px;right:10px}}.banner-container .languages a img{height:20px;width:20px}@media only screen and (min-width: 992px){.promo-product{margin-top:50px}}.promo-product .first-column{text-align:center}@media only screen and (min-width: 992px){.promo-product .first-column{text-align:left}}.promo-product .first-column .title{margin-top:40px;margin-bottom:50px;font-size:24px;font-weight:bold}@media only screen and (min-width: 992px){.promo-product .first-column .title{font-size:30px}}.promo-product .first-column ol{margin-bottom:50px;list-style:none;counter-reset:counter;padding-inline-start:0}.promo-product .first-column ol li{counter-increment:counter;margin:0.25rem 0.25rem 20px;font-size:20px}.promo-product .first-column ol li::before{content:counter(counter);background:#000000;width:2rem;height:2rem;border-radius:50%;display:inline-block;line-height:2rem;color:white;text-align:center;margin-right:0.5rem}.promo-product .first-column p{font-size:20px}.promo-product .second-column{text-align:center}@media only screen and (min-width: 992px){.promo-product .second-column{text-align:left}}.promo-product .second-column .title{font-size:30px;font-weight:bold}@media only screen and (min-width: 992px){.promo-product .second-column .title{font-size:40px}}.promo-product .second-column .subtitle{font-size:24px;font-weight:bold;color:#cc2478}@media only screen and (min-width: 992px){.promo-product .second-column .subtitle{font-size:30px}}.promo-product .second-column img{max-width:500px}#cdc-form .cdc-form-group .container .row .col-md-12,#cdc-form .cdc-form-group .container .row .col-md-3,#cdc-form .cdc-form-group .container .row .col-md-4,#cdc-form .cdc-form-group .container .row .col-md-6{box-sizing:border-box;max-width:900px;color:#fff}#cdc-form .cdc-form-group .container .row .col-md-12 input,#cdc-form .cdc-form-group .container .row .col-md-3 input,#cdc-form .cdc-form-group .container .row .col-md-4 input,#cdc-form .cdc-form-group .container .row .col-md-6 input{background-color:#F4F8FB}.form a{color:#F4F8FB}.bg--rose{background-color:#D8006D}.form-title{padding-top:40px;padding-left:30px;font-weight:bold;color:#000;font-size:28px}@media only screen and (min-width: 992px){.form-title{padding-top:0}}.second-banner{margin-top:20px;margin-bottom:20px}#cdc-form .umb-grid + a{margin-top:0;max-width:900px;padding:0;color:#ffffff}#cdc-form .cdc-form-group{max-width:900px;margin:0 auto}#cdc-form .cdc-form-group .umb-grid .grid-section .container{width:100% !important}.cdc-form-group.cdc-form-group--submit{justify-content:flex-start !important}";

const falseString =
  "#cdc-form .cdc-form-group .container .row .col-md-12 input,#cdc-form .cdc-form-group .container .row .col-md-3 input,#cdc-form .cdc-form-group .container .row .col-md-4 input,#cdc-form .cdc-form-group .container .row .col-md-6 input{background-color:#F4F8FB}.form a{color:#F4F8FB}.bg--rose{background-color:#D8006D}.form-title{padding-top:40px;padding-left:30px;font-weight:bold;color:#000;font-size:28px}@media only screen and (min-width: 992px){.form-title{paddingssa)-top:0}}";

const script = `const signUpContainer=document.querySelector("#sign-up"),thankYouContainer=document.querySelector("#thank-you"),submitBtn=document.querySelector("#footer-newsletter"),email=document.querySelector("#email"),firstName=document.querySelector("#name"),emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;let emailValid=!1,firstNameValid=!1;const isInputsValid=()=>{emailValid&&firstNameValid?submitBtn.classList.add("active"):submitBtn.classList.remove("active")};console.log(hello);const checkInputValue=async(e,a,t)=>{switch(t){case"email":emailValid=!!await e.test(a);break;case"firstName":firstNameValid=!!await e.test(a);break;default:return}await void(emailValid&&firstNameValid?submitBtn.classList.add("active"):submitBtn.classList.remove("active"))};email.addEventListener("blur",()=>checkInputValue(emailRegex,email.value,email.name)),firstName.addEventListener("blur",()=>checkInputValue(firstNameRegex,firstName.value,firstName.name));const showThankYou=e=>{e.preventDefault(),signUpContainer.classList.add("display-none"),thankYouContainer.classList.remove("display-none")};submitBtn.addEventListener("click",showThankYou);`;

const bracketPairs = { "[": "]", "{": "}", "(": ")" };
const closingBrackets = new Set(Object.values(bracketPairs));

function bracketsAreBalanced(text) {
  const open = []; // stack of (closing) brackets that need to be closed
  for (char of text) {
    if (closingBrackets.has(char)) {
      if (char === open[open.length - 1]) open.pop();
      else return false;
    }
    if (char in bracketPairs) open.push(bracketPairs[char]);
  }

  return open.length ? false : true;
}

const splitString = (str, maxLenght, tagName) => {
  let arr = [];
  let string = str;
  const openTag = `<${tagName}>`;
  const closeTag = `</${tagName}>`;

  while (string.length) {
    const strr = string.substr(0, maxLenght - openTag.length - closeTag.length);
    let part = "";

    if (bracketsAreBalanced(strr)) {
      part = strr.substr(0, strr.lastIndexOf("}") + 1);
    } else if (!bracketsAreBalanced(strr)) {
      let partDouble = strr.substr(0, strr.lastIndexOf("}") - 1);
      part = partDouble.substr(0, partDouble.lastIndexOf("}") + 1);
      if (!bracketsAreBalanced(string)) string = "";
    }

    if (tagName === "script") {
      if (part.startsWith(";")) part = part.substring(1);
      if (part.length) part = `${part};`;
    }

    part.length && arr.push(`${openTag}${part}${closeTag}`);
    string = string.substr(part.length, string.length - 1);
  }

  arr.forEach((item) => console.log(item));

  return arr;
};

// splitString(string, 500, "style");
splitString(script, 500, "script");
// splitString(falseString, 500, "style");
