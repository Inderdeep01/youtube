document.querySelector('#button').addEventListener('click',()=>{
    const xhr = new XMLHttpRequest();
    const value = document.querySelector('#search').value
    let url = `https://www.googleapis.com/youtube/v3/search?key=[key]&part=snippet&q=${value}`

    xhr.open('GET',url)

    xhr.onreadystatechange = ()=>{
        if(xhr.status === 200 && xhr.readyState === 4){
            const respone = JSON.parse(xhr.responseText)

            let output = ''
            for(let i=0;i<respone.items.length;i++){
            output+=`
                <div style="width:22%; margin:0.5em">
                    <img style="width:100%" src=${respone.items[0].snippet.thumbnails.high.url}/>
                    <h5>${respone.items[0].snippet.title}</h5>
                    <p>${respone.items[0].snippet.description}</p>
                </div>
            `
            }
            document.querySelector('#videos').innerHTML = output
        }
    }
})