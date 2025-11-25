// Worksポップアップ表示
// 要素の取得
// 画像
const galleryImages = document.querySelectorAll('.mywork-index-gallery img');
// オーバーレイ
const overlay = document.getElementById('popup-overlay');
// 画像を入れる箱
const popupImg = document.getElementById('popup-image');
// 画像をクリックで表示
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    overlay.classList.add('active');
  });
});
// 背景クリックで閉じる
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    popupImg.src = "";
  }
});
// ESCキーでも閉じる（UX向上）
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overlay.classList.remove('active');
    popupImg.src = "";
  }
});
