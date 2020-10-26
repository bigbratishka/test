let photoUp = document.getElementById('photo-upload');
let photoUpPreview = document.getElementById('photo-upload-image');
photoUp.addEventListener('change', () => {
  cardImage = photoUp.files[0];
  uploadFile(photoUp.files[0]);
});

function uploadFile(file) {
  if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Пожалуйста, загрузите изображение в формате jpg, jpeg, png или gif.');
    return;
  };
  if (file.size > 10 * 1024 * 1024) {
    alert('Файл должен быть менее 10 МБ.');
    return;
  };

  let reader = new FileReader();
  reader.onload = function (e) {
    photoUpPreview.removeAttribute('src');
    photoUpPreview.setAttribute('src', e.target.result);
    $(CCPhotoUpCap).removeClass('field-caption_required');
    cardImage = e.target.result;
  };
  reader.oneror = function (e) {
    alert('Произошла непридвиденная ошибка');
  };
  reader.readAsDataURL(file);
};

