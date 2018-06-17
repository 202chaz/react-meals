import React from 'react';
import axios from 'axios';
import './Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meals:[],
    };
  }
  
  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => this.setState({ meals: response.data.meals}))
  }
  
  showVideo(meal) {
    let videoId = meal.strYoutube.split('/')[3].replace('watch?v=','');
    let embeddedVideo = "https://www.youtube.com/embed/"+videoId;
    return (
      <iframe width="560" height="315" src={embeddedVideo} title={meal.strMeal} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    )
  }
  
  render() {
    
    return (
      <div>
        {this.state.meals.map((meal) =>
          <div key={meal.idMeal}>
            <h1 class="text-center">Meal of the Day</h1>
            <div class="row">
              <div class="col-md-5 col-sm-5 col-xs-12">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div class="col-md-7 col-sm-7 col-xs-12">
                <h2>{meal.strMeal}</h2>
                <h5 class="mt-2">Ingredients</h5>
                  <ul class="list-group">
                    { meal.strIngredient1.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure1 + " " + meal.strIngredient1}</li>
                    }
                    { meal.strIngredient2.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure2 + " " + meal.strIngredient2}</li>
                    }
                    { meal.strIngredient3.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure3 + " " + meal.strIngredient3}</li>
                    }
                    { meal.strIngredient4 != null && meal.strIngredient4.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure4 + " " + meal.strIngredient4}</li>
                    }
                    { meal.strIngredient5 != null && meal.strIngredient5.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure5 + " " + meal.strIngredient5}</li>
                    }
                    { meal.strIngredient6 != null && meal.strIngredient6.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure6 + " " + meal.strIngredient6}</li>
                    }
                    { meal.strIngredient7 != null && meal.strIngredient7.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure7 + " " + meal.strIngredient7}</li>
                    }
                    { meal.strIngredient8 != null && meal.strIngredient8.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure8 + " " + meal.strIngredient8}</li>
                    }
                    { meal.strIngredient9 != null && meal.strIngredient9.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure9 + " " + meal.strIngredient9}</li>
                    }
                    { meal.strIngredient10 != null && meal.strIngredient10.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure10 + " " + meal.strIngredient10}</li>
                    }
                    { meal.strIngredient11 != null && meal.strIngredient11.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure11 + " " + meal.strIngredient11}</li>
                    }
                    { meal.strIngredient12 != null && meal.strIngredient12.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure12 + " " + meal.strIngredient12}</li>
                    }
                    { meal.strIngredient13 != null && meal.strIngredient13.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure13 + " " + meal.strIngredient13}</li>
                    }
                    { meal.strIngredient14 != null && meal.strIngredient14.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure14 + " " + meal.strIngredient14}</li>
                    }
                    { meal.strIngredient15 != null && meal.strIngredient15.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure15 + " " + meal.strIngredient15}</li>
                    }
                    { meal.strIngredient16 != null && meal.strIngredient16.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure16 + " " + meal.strIngredient16}</li>
                    }
                    { meal.strIngredient17 != null && meal.strIngredient17.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure17 + " " + meal.strIngredient17}</li>
                    }
                    { meal.strIngredient18 != null && meal.strIngredient18.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure18 + " " + meal.strIngredient18}</li>
                    }
                    { meal.strIngredient19 != null && meal.strIngredient19.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure19 + " " + meal.strIngredient19}</li>
                    }
                    { meal.strIngredient20 != null && meal.strIngredient20.length > 0 &&
                      <li class="list-group-item">{meal.strMeasure20 + " " + meal.strIngredient20}</li>
                    }
                  </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <h2 class="mt-2">Preparation</h2>
                <p class="lead">{meal.strInstructions}</p>
              </div>
            </div>
            {
              this.showVideo(meal)
            }
          </div>
        )}
      </div>
    );
  }
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Menu;