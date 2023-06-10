function getJoke() {
    var url = 'https://api.chucknorris.io/jokes/random';
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var jokeElement = document.getElementById('joke');
        jokeElement.textContent = data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  