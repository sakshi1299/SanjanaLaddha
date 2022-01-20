const main = document.getElementById('projects');
const url_string = window.location.search;
console.log(url_string.split("=")[1])
// var url = new URL(url_string);
const id = parseInt(url_string.split("=")[1]);
fetch('https://api-ap-south-1.graphcms.com/v2/ckxj28hx22s6901xo4qira60q/master' , {
    method : 'POST' ,
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({
        query : `
            query MyQuery($id : Int) {
                project(where: { id_: $id}) {
                   link
                   caseStudy {
                     html
                   }
                   title
                   description
                   image {
                    url
                  }
                 }}`,
          variables : {id : id}
    }),
    
})
.then(res => res.json())
.then(data =>{
    console.log(data.data.project);
    if(data.data.project.link)
    {
        window.location.href = data.data.project.link
    }
    else
    {
        const div1 = document.createElement('div');
            div1.classList.add("projectshead");
            div1.setAttribute("data-aos" , "fade-up");
                const heading = document.createElement('h1');
                    heading.innerHTML = data.data.project.title;
                div1.appendChild(heading);

                const breakLine = document.createElement('br');
                    breakLine.classList.add("mobnone");
                div1.appendChild(breakLine);

                const para = document.createElement('p');
                    para.innerHTML = data.data.project.description;
                div1.appendChild(para);

        const div2 = document.createElement('div');
            div2.classList.add("projectimg");
                const image = document.createElement('img');
                    image.classList.add("card-img-top");
                    image.setAttribute("data-aos" , "fade-up");
                    image.src = data.data.project.image.url;
        div2.appendChild(image);

        const sect = document.createElement('section');
        sect.id = "view";
            const div3 = document.createElement('div');
                div3.classList.add("projectsview");
                div3.setAttribute("data-aos" , "fade-up");
                div3.innerHTML = data.data.project.caseStudy.html;
            sect.appendChild(div3);
       
   
        main.appendChild(div1);
        main.appendChild(div2);
        main.appendChild(sect);
    }
})