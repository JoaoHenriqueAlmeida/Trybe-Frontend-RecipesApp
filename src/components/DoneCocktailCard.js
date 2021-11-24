import React from 'react';
import shareIcon from '../images/shareIcon.svg';

export default function DoneCocktailCard() {
  return (
    <section>
      <img
        data-testid={ `${index}-horizontal-image` }
        key={ index }
        alt={ recipe.id }
        src={ recipe.image }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {recipe.alcoholicOrNot}
      </p>
      <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {recipe.doneDate}
      </p>
      <button type="button">
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share button"
        />
      </button>
    </section>
  );
}
