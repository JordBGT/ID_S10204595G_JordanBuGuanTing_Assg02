fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=Singapore&region=SG", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72a74e0bf3msh2f8a9461f2f20dfp11095cjsned11d42107cf",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
})
.then(response => response.json().then(
    data=>{
        var table = document.getElementById('news');
        console.log(data);
        let news = data.news;
        console.log(news);
        for(i = 0; i < news.length; i++){
            var row = `<tr>
            <h>Headline:</h> <td>${news[i].title}</td> <br>
            <h>Publisher:</h> <td>${news[i].publisher}</td> <br>
            <h>Link:</h> <td>${news[i].link}</td> <br>
            <br>
            </tr>`;
            table.innerHTML += row;
        }
    })
)
.catch(err => console.error(err));