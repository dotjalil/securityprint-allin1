const whatsappUrl = (waNum) => {
  return encodeURI(
    `https://wa.me/${waNum}?backup=true&text=مرحبًا،+السلام+عليكم+ورحمة+الله+وبركاته`
  );
};

export default whatsappUrl;
