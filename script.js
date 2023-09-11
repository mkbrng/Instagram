let posts = [
    {
        'author' : 'Raketenkauz',
        'p-image':'./img/image1.jpg',
        'image' : ['./img/image1.jpg',],
        'description' : 'Der Raketenkauz hat erstaunliche Flugkünste und kann senkrecht in die Luft starten. Er ist so schnell, dass man ihn kaum sehen kann.',
        'location' : 'Germany',
        'comments' : [],
        
    },
    {
        'author' : 'Schaukelnder Spatz',
        'p-image':'./img/image2.jpg',
        'image' : ['./img/image2.jpg',],
        'description' : 'Dieser Spatz verbringt seine Zeit damit, auf Schaukeln zu sitzen und vorwärts und rückwärts zu schaukeln. Er liebt das Gefühl des Windes in seinen Federn.',
        'location' : 'Germany',
        'comments' : [],
        
    }, {
        'author' : 'Schlafmützen-Eule',
        'p-image':'./img/image3.jpg',
        'image' : ['./img/image3.jpg',],
        'description' : 'Diese Eule schläft den Großteil des Tages und ist nachts überhaupt nicht aktiv. Sie ist bekannt für ihr entspanntes Lebensmotto: "Nicht heute, vielleicht morgen."',
        'location' : 'Germany',
        'comments' : [],
        
    }, {
        'author' : 'Zaubervogel Zippel',
        'p-image':'./img/image4.jpg',
        'image' : ['./img/image4.jpg',],
        'description' : 'Der Zaubervogel Zippel kann sich in einen anderen Vogel verwandeln, wenn er pfeift. Seine Lieblingszaubertricks sind das Verschwinden und Wiedererscheinen.',
        'location' : 'Germany',
        'comments' : [],
        
    }
    
]

function render (){
             document.getElementById('postcontainer').innerHTML = '';
             

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        generateMainHtml(post,i);
        generateCommentHtml(i);
       
        let postcomments = document.getElementById(`postcomments${i}`);
        let postpicture = document.getElementById(`postpicture${i}`);
        let commentfield = document.getElementById(`commentfield${i}`);

        for (let j = 0; j < post['comments'].length; j++) {
          const comment = post['comments'][j];
          postcomments.innerHTML += `<div class="comments">${comment}</div>`
          commentfield.innerHTML += `<div class="comments"><img class="profilpic" src="./img/image0.jpg" alt="" /><h3>Flugpizza</h3>${comment}</div>`
        }
        
        for (let k = 0; k < post['image'].length; k++) {
            const imageSrc = post['image'][k];
            postpicture.innerHTML += `<img src="${imageSrc}" />`
            commentfield.innerHTML += `<img class="commentfieldpic" src="${imageSrc}" />`
        }

    }
}

function addComment(i) {
    let input = document.getElementById(`input${i}`);
    if (input.value == '') {
        alert('Bitte Kommentar schreiben')
    } else {
        posts[i]['comments'].push(input.value);
     input.value = '';
     
     renderComments();
    }
       
}

function showComment (i) {
    document.getElementById(`commentfield${i}`).classList.remove('hidden') ;
}

function closeWindow(i) {
    document.getElementById(`commentfield${i}`).classList.add('hidden') ;
}


function renderComments() {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const commentfield = document.getElementById(`commentfield${i}`);

        // Add comment field and close button
        generateCommentFieldHtml(i,commentfield);

        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            const postcomments = document.getElementById(`commentfieldright${i}`);
            postcomments.innerHTML += `<div class="comments"><img class="profilpic" src="./img/image0.jpg" alt="" /><h3>Flugpizza</h3>${comment}</div>`;
        }

        for (let k = 0; k < post['image'].length; k++) {
            const imageSrc = post['image'][k];
            commentfield.innerHTML += `<img class="commentfieldpic" src="${imageSrc}" />`;
        }
    }
}

let likecount = 0;
function like(i) {
    
    if (likecount==0) {
        likecount++;
        document.getElementById(`likes${i}`).innerHTML = `<h3>Gefällt ${likecount} Personen</h3>`;
    } else {
        likecount=0;
        document.getElementById(`likes${i}`).innerHTML = ``;
    }
    

    
    }

    
function generateMainHtml(post,i) {
console.log(post,i)
return document.getElementById('postcontainer').innerHTML +=`<div class="post">
<div class="abovepic">
   
   <img class="p-image" src="${post['p-image']}"/>
   <div class="authorname"><h3>${post['author']}</h3>
   <p>${post['location']}</p></div>
   </div>



<div id="postpicture${i}"></div>
<p>${post['description']}</p>
<div class="postbuttons">

<img src="./icons/heart.png" alt="" onclick="like(${i})"/> <img src="./icons/chat.png" onclick="showComment(${i})" alt="" />
<img src="./icons/send_2099085.png" alt="" />

</div>
<div id="likes${i}"></div>

<div class="bottom-border"></div>
</div>`
}

function generateCommentHtml(i) {
    return document.getElementById('postcontainer').innerHTML += 
    `
    
        <div id="commentfield${i}" class="hidden commentfield">
        <div id="postcomments${i}"></div>  
        <div id="postcomments${i}"></div>  
        <div class="commentfieldright" id="commentfieldright${i}"><div class="input"><input id="input${i}" placeholder="Kommentieren..."><button onclick="addComment(${i})">Posten</button></div>
        <img onclick="closeWindow(${i})" class="closebutton postbuttons" src="./icons/close.png" alt="" /><div>
    `
}

function generateCommentFieldHtml(i,commentfield) {
    return commentfield.innerHTML = `
    <div id="postcomments${i}"></div>  
    <div class="commentfieldright" id="commentfieldright${i}"><div class="input"><input id="input${i}" placeholder="Kommentieren..."><button onclick="addComment(${i})">Posten</button></div>
    <img onclick="closeWindow(${i})" class="closebutton postbuttons" src="./icons/close.png" alt="" /><div>
`
}