const mainDiv = document.getElementById('projectDiv');
fetch('https://api-ap-south-1.graphcms.com/v2/ckxj28hx22s6901xo4qira60q/master' , {
    method : 'POST' ,
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
        query : `
        query{
            projects{
                id_
                adminLock
                title
                link
                description
                caseStudy
                image {
                    url
                  }
              }
        }`
    })
})
.then(res => res.json())
.then(data =>{
    data.data.projects.forEach(project => {
        console.log(project);
        const colDiv = document.createElement('div');
        colDiv.classList.add("col-sm-12");
        colDiv.classList.add("col-xs-12");
        colDiv.classList.add("col-md-6");
        colDiv.setAttribute("data-aos" , "fade-up")
        const link = document.createElement('a');
        let url , finalUrl;
        if(!project.adminLock)
        {
             url = "projectsCaseStudy.html?id=";
             finalUrl =  url.concat(project.id_);
        }
        else
        {
             url = "protected.html?id=";
             finalUrl =  url.concat(project.id_);
        }
            link.setAttribute("href" , finalUrl);
                const card = document.createElement('div');
                    card.classList.add("card");
                    card.classList.add("odd");
                   
                    const cardImg = document.createElement('img');
                        cardImg.src = project.image.url;
                        cardImg.classList.add("card-img-top");
                card.appendChild(cardImg);
                    const cardBody = document.createElement('div');
                        cardBody.classList.add("card-body");
                            const title = document.createElement('h3');
                                title.classList.add("card-title");
                                title.innerHTML = project.title;
                            cardBody.appendChild(title);
                                const desc = document.createElement('p');
                                desc.classList.add("card-text");
                            desc.innerText = project.description;
                    cardBody.appendChild(desc);
                card.appendChild(cardBody);
        link.appendChild(card);
        colDiv.appendChild(link);
        mainDiv.appendChild(colDiv);
    });
});
