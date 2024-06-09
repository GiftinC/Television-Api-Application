document.querySelector("button").addEventListener("click", result);

var container = document.createElement("div");
container.setAttribute("Class", "container");

var row = document.createElement("div");
row.setAttribute("Class", "row");

async function result() {
    row.innerHTML = " ";
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res);

        var Display = document.createElement("div");
        Display.innerHTML = `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${res[0].show.image.original}" alt="card-img-top">
<div class="card-body">
  <h5 class="card-title">${res[0].show.name}</h5>
  <p class="card-text"><b>Genre: </b>${res[0].show.genres}</p>
  <p class="card-text"><b>Language: </b>${res[0].show.language}</p>
  <p class="card-text"><b>Premiered: </b>${res[0].show.premiered}</p>
  <p class="card-text"><b>Rating: </b>${res[0].show.rating.average}</p>
  <p class="card-text"><b>Network: </b>${res[0].show.network.name}</p>
  <p class="card-text"><b>Runtime: </b>${res[0].show.runtime}</p>
  <p class="card-text"><b>Summary: </b>${res[0].show.summary}</p>
</div>
</div>`

        row.append(Display);
        container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error);
    }
}



