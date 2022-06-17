var data = [
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/18850.gif",
    company: "Oracle",
    rating: "⭐ 3.9 | 3.5K+ reviews",
    claim: "Cloud technology company since 1977.",
    button: "View jobs",
    filter: "BPM(12)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/194354.gif",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+ reviews",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
    filter: "IT Services(16)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/42932.gif",
    company: "Genpact",
    rating: "⭐4.0 | 19.3K+ reviews",
    claim: "Global professional services firm.",
    button: "View jobs",
    filter: "Technology(3)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/4582763.gif",
    company: "Biz2Credit",
    rating: "⭐4.2 | 113 reviews",
    claim: "Leading the #FinTech Revolution.",
    button: "View jobs",
    filter: "BFSI (4)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/384216.gif",
    company: "Mouser Electronics",
    rating: "⭐ 4.4 | 53 reviews",
    claim: "Leading distributor of electronic products.",
    button: "View jobs",
    filter: "BPM(12)",
  },
  {
    img_url: "https://static.naukimg.com/s/0/0/i/registerLock.png",
    company: "HCL",
    rating: "⭐3.9 | 20.3K+ reviews",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
    filter: "IT Services(16)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/419316.gif",
    company: "HCL",
    rating: "⭐ 3.9 | 3.5K+ reviews",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
    filter: "Technology(3)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/4614431.gif",
    company: "Netcrackers",
    rating: "⭐3.9 | 20.3K+",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
    filter: "BFSI (4)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/2436002.gif",
    company: "HCL",
    rating: "⭐ 3.7 | 338 reviews",
    claim: "Globel leader in Bss.",
    button: "View jobs",
    filter: "IT Services & consulting(16)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/2483944.gif",
    company: "HCL",
    rating: "⭐ 4.4 | 880 reviews",
    claim: "Globally acclaimed tech company since 1991.",
    button: "View jobs",
    filter: "Financial Services(6)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/4264.gif",
    company: "jobBoxes",
    rating: "⭐ 4.0 | 1.5K+ reviews",
    claim: "Management services company since 2003..",
    button: "View jobs",
    filter: "Internet(3)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/47784.gif",
    company: "Mindtree",
    rating: "⭐ 3.7 | 6.2K+ reviews",
    claim: "Leading business process managment...",
    button: "View jobs",
    filter: "Analitycs / KPO ? Research (2)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/44512.gif",
    company: "ICICI Bank",
    rating: "⭐ 3.9 | 3.5K+ reviews",
    claim: "Global IT Services & consulting company.",
    button: "View jobs",
    filter: "Indian MNC(4)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/9558.gif",
    company: "Nagarro",
    rating: "⭐ 4.5 | 32.5K+ reviews",
    claim: "Leading private sector bank in India.",
    button: "View jobs",
    filter: "Foreign MNC(16)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/1186200.gif",
    company: "Virtusa",
    rating: "⭐ 4.9 | 1K+ reviews",
    claim: "Cloud technology company since 1977.",
    button: "View jobs",
    filter: "Financial Services(6)",
  },
  {
    img_url: "https://img.naukimg.com/logo_images/groups/v2/1288.gif",
    company: "Capgemini",
    rating: "⭐ 3.9 | 1.5K+ reviews",
    claim: "IT services  company since 1996.",
    button: "View jobs",
    filter: "Corporate(3)",
  },
];

displayData(data);

document.querySelector("#ida").addEventListener("click", fun);
function fun() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "IT Services(16)";
    });
    displayData(a);
  });
}
document.querySelector("#idb").addEventListener("click", fun1);
function fun1() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "BFSI (4)";
    });
    displayData(a);
  });
}
document.querySelector("#idc").addEventListener("click", fun2);
function fun2() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Technology(3)";
    });
    displayData(a);
  });
}
document.querySelector("#idd").addEventListener("click", fun3);
function fun3() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "BPM(12)";
    });
    displayData(a);
  });
}
document.querySelector("#id11").addEventListener("click", fun4);
function fun4() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "IT Services & consulting(16)";
    });
    displayData(a);
  });
}
document.querySelector("#id12").addEventListener("click", fun5);
function fun5() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Analitycs / KPO ? Research (2)";
    });
    displayData(a);
  });
}
document.querySelector("#id13").addEventListener("click", fun6);
function fun6() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Internet(3)";
    });
    displayData(a);
  });
}
document.querySelector("#id14").addEventListener("click", fun7);
function fun7() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Financial Services(6)";
    });
    displayData(a);
  });
}
document.querySelector("#id15").addEventListener("click", fun8);
function fun8() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Telecom / ISP(6)";
    });
    displayData(a);
  });
}
document.querySelector("#id20").addEventListener("click", fun11);
function fun11() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Banking(1)";
    });
    displayData(a);
  });
}
document.querySelector("#id16").addEventListener("click", fun12);
function fun12() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Foreign MNC(16)";
    });
    displayData(a);
  });
}
document.querySelector("#id17").addEventListener("click", fun13);
function fun13() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Indian MNC(4)";
    });
    displayData(a);
  });
}
document.querySelector("#id18").addEventListener("click", fun14);
function fun14() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "Corporate(3)";
    });
    displayData(a);
  });
}
document.querySelector("#id33").addEventListener("click", fun15);
function fun15() {
  data.filter(function (ele) {
    var a = data.filter(function (elem) {
      return elem.filter == "BPM(12)";
    });
    displayData(a);
  });
}


function displayData(data) {
  document.querySelector("#outer").innerHTML = "";

  data.map(function (ele) {
    var box = document.createElement("div");

    var image = document.createElement("img");
    image.src = ele.img_url;
    var lilBox = document.createElement("div");

    var companies = document.createElement("h4");
    companies.innerText = ele.company;
    // companies.style.backgroundColor = "blue"
    // companies.setAttribute=("id","company")
    var rate = document.createElement("p");
    rate.innerText = ele.rating;
    lilBox.append(companies, rate);
    // lilBox.style.backgroundColor = "blue"
    // lilBox.style.margin = "auto"

    var c = document.createElement("p");
    c.innerText = ele.claim;
    //   claim.setAttribute("id","claim")
    var btn = document.createElement("button");
    btn.textContent = ele.button;

    box.append(image, lilBox, c, btn);
    document.querySelector("#outer").append(box);
  });
}
document.querySelector("#navEmploy").addEventListener("click", slectFun);
function slectFun() {
  event.preventDefault();
  let a = document.querySelector("#navEmploy").value;
  // console.log(a)
  if (a === "Employer Login") {
    window.location.href = "employlogin.html";
  } else {
    return false;
  }
}