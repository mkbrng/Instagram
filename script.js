let posts = [
    {
        'author' : 'Tagesschau',
        'image' : './img/img0.jpg',
        'description' : 'hier steht eine Beschreibung',
        'location' : 'Germany',
        'comments' : []
    },
    {
        'author' : 'Tagesschau',
        'image' : './img/img0.jpg',
        'description' : 'hier steht eine Beschreibung',
        'location' : 'Germany',
        'comments' : []
    }, {
        'author' : 'Tagesschau',
        'image' : './img/img0.jpg',
        'description' : 'hier steht eine Beschreibung',
        'location' : 'Germany',
        'comments' : []
    }, {
        'author' : 'Tagesschau',
        'image' : './img/img0.jpg',
        'description' : 'hier steht eine Beschreibung',
        'location' : 'Germany',
        'comments' : []
    }
    
]

function render (){
    document.getElementById('postcontainer').innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        document.getElementById('postcontainer').innerHTML += `
        <div>
        <p>${post['author']}</p>
        <p>${post['description']}</p>
        <p>${post['location']}</p>
        <img src="${post['image']}">
        <div id="postcomments${i}"></div>
        <div><input id="input${i}"><button onclick="addComment(${i})">comment</button></div>
        </div>

        `;

        let postcomments = document.getElementById(`postcomments${i}`);

        for (let j = 0; j < post['comments'].length; j++) {
          const comment = post['comments'][j];
          postcomments.innerHTML += `<div>${comment}</div>`
        }
        
    }
}

function addComment(i) {
    let input = document.getElementById(`input${i}`);
    
     posts[i]['comments'].push(input.value);
     
     render();
     

    
}

render();

