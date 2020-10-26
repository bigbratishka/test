let cardColor,
  cardImage,
  cardDescription,
  cardSocials = {
    vk: 'https://vk.com/',
    ig: 'https://www.instagram.com/',
    tg: 'https://t.me/',
    wa: 'https://wa.me/',
  },
  cardSocialsFlag = 0,
  cardReferalsFreetor = {
    link: undefined,
    text: undefined,
  },
  cardReferalsNovamind = {
    link: undefined,
    text: undefined,
  },
  cardReferalsNovavi = {
    link: undefined,
    text: undefined,
  },

  allFillFlag = 0,

  CCPhotoUpCap = document.getElementById('card-creator__photo-upload-caption'),
  CCPDescriptionCap = document.getElementById('card-creator__description-caption'),
  CCSocialsCap = document.getElementById('card-creator__socials-caption'),
  CCColorSelect = document.querySelector('.card-creator-form__color-select'),

  CRImage = document.querySelector('.card-result__image'),
  CRDescription = document.querySelector('.card-result__description');

  currentCard = document.getElementById('card-result-wrap').innerHTML;

function isCheck(name) {
  return document.querySelector('input[name="' + name + '"]:checked');
};


$('.card-creator__submit').click(function () {
  cardColor = isCheck('color').value;
  cardDescription = $('#card-creator__description').val();

  if (photoUp.files.length == 0) {
    $(CCPhotoUpCap).addClass('field-caption_required');
    CCColorSelect.scrollIntoView({ behavior: "smooth" });
    allFillFlag = 1;
  } else {
    CRImage.removeAttribute('src');
    CRImage.setAttribute('src', cardImage);
  };

  if (!$('#card-creator__description').val()) {
    $(CCPDescriptionCap).addClass('field-caption_required');
    CCColorSelect.scrollIntoView({ behavior: "smooth" });
    allFillFlag = 1;
  } else {
    CRDescription.textContent = $('#card-creator__description').val();
  };

  let allSocialsFields = document.querySelectorAll('.socials__field');
  for (SocialsField of allSocialsFields) {
    if ($(SocialsField).val()) {
      let currentObjectProperty = eval($(SocialsField).data('object-property'));
      currentObjectProperty = currentObjectProperty + $(SocialsField).val();
      
      let resultSocialsId = $(SocialsField).data('card-result-socials');
      $(`#${resultSocialsId}`).attr('href', currentObjectProperty);
      $(`#${resultSocialsId}`).attr('href', currentObjectProperty);
      cardSocialsFlag = 1;

      if (cardColor == 'white') {
        $(`#${resultSocialsId}`).css({'backgroundColor':'#44097c'});
      };
      if (cardColor == 'black') {
        $(`#${resultSocialsId}`).addClass('black-active');
      };
      if (cardColor == 'purple') {
        $(`#${resultSocialsId}`).css({'backgroundColor':'#44097c'});
        $(`#${resultSocialsId}`).addClass('purple-active');
      }
    };
  };

  if ($('#referals-freetor-link').val()) {
    cardReferalsFreetor.link = $('#referals-freetor-link').val();
    cardReferalsFreetor.text = $('#referals-freetor-text').val();
  };
  if ($('#referals-novamind-link').val()) {
    cardReferalsNovamind.link = $('#referals-novamind-link').val();
    cardReferalsNovamind.text = $('#referals-novamind-text').val();
  };
  if ($('#referals-novavi-link').val()) {
    cardReferalsNovavi.link = $('#referals-novavi-link').val();
    cardReferalsNovavi.text = $('#referals-novavi-text').val();
  };

  if (cardSocialsFlag == 0) {
    $(CCSocialsCap).addClass('field-caption_required');
    CCColorSelect.scrollIntoView({ behavior: "smooth" });
    allFillFlag = 1;
  };

  if (cardColor == 'black') {
    $('.card-result').addClass('card-result_black');
  }
  if (cardColor == 'purple') {
    $('.card-result').addClass('card-result_purple');
  }

  if (allFillFlag == 0) {
    $('#card-result-wrap').fadeIn(600,() => {$('#card-creator-wrap').hide();});
    
    $('.page-content').css({ 'overflow': 'hidden' });
  };

  $('#card-result-close').click(function () {
    $('#card-result-wrap').fadeOut(300);
    $('.page-content').css({'overflow' : 'auto'});
  });

  $('#card-result__button-change').click(function () {
    $('#card-result-wrap').fadeOut(300,() => {$('#card-creator-wrap').fadeIn(300);});
    $('.card-result').className = 'card-result';
    let allResultSocLinks = document.querySelectorAll('.card-result__socials-link');
    for (let link of allResultSocLinks) {
      link.removeAttribute('style');
      link.removeAttribute('href');
      link.classList.remove("purple-active", "black-active");
    };
    cardSocials.vk = 'https://vk.com/';
    cardSocials.ig = 'https://www.instagram.com/';
    cardSocials.tg = 'https://t.me/';
    cardSocials.wa = 'https://wa.me/';
  });

  $('#card-result__button-save').click(function () {
    document.querySelector('#card-result-close').remove();
    document.querySelector('.content-section_top_left').innerHTML = document.querySelector('#card-result-wrap').innerHTML;
    $('#card-result-wrap').hide();
  })
});


