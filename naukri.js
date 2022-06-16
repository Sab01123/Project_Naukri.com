var data = [
    {
      img_url: "https://img.naukimg.com/logo_images/v2/892542.gif",
      company: "TCS",
    },
    {
      img_url: "https://img.naukimg.com/logo_images/v2/1384.gif",
      company: "Wipro",
    },
    {
      img_url: "https://img.naukimg.com/logo_images/v2/10081.gif",
      company: "ICICI Bank",
    },
    {
      img_url: "https://img.naukimg.com/fc_images/v2/16987.gif",
      company: "IBM",
    },
    {
      img_url: "https://img.naukimg.com/logo_images/v2/11014.gif",
      company: "intel",
    },
  ];
  
  data.map(function (elem) {
    var div = document.createElement("div");
    var company = document.createElement("p");
    company.innerText = elem.company;
    var img = document.createElement("img");
    img.src = elem.img_url;
  
    div.append(img, company);
    document.getElementById("company").append(div);
  });