var array = [];
document.querySelectorAll("._2a_i").forEach(e => {
//     console.log(e);
    let name = e.querySelector("a._4kk6");
    let comment = e.querySelector('div[data-sigil="comment-body"]');

    if (name && comment && Number(comment.innerText) < 1000 && Number(comment.innerText) > 0) {
        array.push({name: name.href, comment: comment.innerText});
    }
});

console.log(array);