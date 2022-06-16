var data = [
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/21746.gif",
    company: "HCL",
    rating: "4.1 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
  },
];

data.map(function(ele){
var box = document.createElement("div")

var image = document.createElement("img")
image.src = ele.img_url
var lilBox = document.createElement("div")

var companies = document.createElement("h4")
companies = ele.company
// companies.style.backgroundColor = "blue"
// companies.setAttribute=("id","company")
var rate = document.createElement("p")
rate = ele.rating
lilBox.append(companies,rate)
// lilBox.style.backgroundColor = "blue"
// lilBox.style.margin = "auto"

var claim = document.createElement("p")
claim = ele.claim
var btn = document.createElement("button")
btn.textContent=ele.button

box.append(image,lilBox,claim,btn)
document.querySelector("#outer").append(box)
})