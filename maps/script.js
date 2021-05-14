const imgMap = document.getElementById('imgMap');
const container = document.querySelector('.coord');

imgMap.addEventListener('mousemove', coordMaps);

function coordMaps(e) {
    e.preventDefault();
    let x = e.clientX;
    let y = e.clientY;

    container.innerHTML = `<p>Coordenates: ${x} ${y}</p>`


}