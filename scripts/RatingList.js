class RatingList {
  constructor(n) {
  }

  add(lang, rating) {
    
    // Create Container 'lang_name' for Language Name
    const lang_name = document.createElement('div');
    lang_name.classList.add('lang-name');
    // Create Paragraph for Language Name Text
    const lang_name_p = document.createElement('p');
    const node = document.createTextNode(lang);
    lang_name_p.appendChild(node);
    // Add Text to 'lang-name' container
    lang_name.appendChild(lang_name_p);

    // Create Container 'lang_rating' for Rating
    const lang_rating = document.createElement('div');
    lang_rating.classList.add('lang-rating');
    // Create and add Spans to 'lang_rating'
    for (let i = 0; i < 5; i++) {
      const span_element = document.createElement('span');
      if (i < rating) {
        span_element.classList.add('filled-rating');
      }
      else {
        span_element.classList.add('empty-rating');
      }
      lang_rating.appendChild(document.createTextNode(' '));
      lang_rating.appendChild(span_element);
    }

    // Create Parent Container 'lang_item' for Entire Language Item
    const lang_item = document.createElement('div');
    lang_item.classList.add('lang-item');
    // Add lang_name and lang_rating child containers to parent lang_item
    lang_item.appendChild(lang_name);
    lang_item.appendChild(lang_rating);

    // Add Parent Container to Lang List Container
    document.getElementById('lang-list').appendChild(lang_item);

  }
}

