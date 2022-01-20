const image = document.getElementById("archiveGif");

fetch('https://api-ap-south-1.graphcms.com/v2/ckxj28hx22s6901xo4qira60q/master' , {
    method : 'POST' ,
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
        query : `
        query{
            archives {
                id
                gif {
                  url
                }
              }
        }`
    })
})
.then(res => res.json())
.then(data =>{
    
    data.data.archives.forEach(gif => {
        console.log(gif)
        const newDiv = document.createElement('div');
        newDiv.classList.add("col-sm-12");
        newDiv.classList.add("col-xs-12");
        newDiv.classList.add("col-md-12");
        newDiv.classList.add("gif-card");
        newDiv.setAttribute("data-aos" , "fade-up");
        const image1 = document.createElement('img');
        image1.src = gif.gif.url;
        image1.width = 830;
        image1.classList.add("gif")
        newDiv.appendChild(image1)
        image.appendChild(newDiv);
    
    });
})