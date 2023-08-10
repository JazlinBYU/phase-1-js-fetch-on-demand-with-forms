/** @format */

const init = () => {
  const input = document.querySelector("form");
  const inputValue = document.getElementById("searchByID");
  input.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(inputValue.value);

    fetch(`http://localhost:3000/movies/${inputValue.value}`)
      //we change the fetch request to accept inputValue.value as a parameter
      //so it sends the correct movie based on their input value.
      //typing outside of the parameters value will return with 404 not found error.
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        //console.log(data);

        //console.log will now show our array of movies.
        //LOG: (3) shows there are 3 movies in the array.
        //[{...}, {...}, {...}]

        title.innerText = data.title;
        summary.innerText = data.summary;
        //innerText will now show the title and summary of the movie.

        //this html code below is the "h4" and "p" elements we grab using .querySelector
        //starting with selection, (id = "#").

        //<section id-"movieDetails"> == $0
        //<h4>The Brave Little Toaster</h4>
        //<p>A group of appliances set off on a journey</p>
        //</section>
      });
  });
};
document.addEventListener("DOMContentLoaded", init);
//keeping this outside of the init() function is a good practice.
