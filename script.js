 const  likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

let likes = 0;

likeButton.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;

    likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';

    likeButton.disabled = true;

    likeButton.classList.add('clicked');

    setTimeout(() => {
        likeButton.classList.remove('clicked');
    }, 500); 
});
