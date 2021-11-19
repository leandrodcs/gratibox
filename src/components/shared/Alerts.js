import Swal from 'sweetalert2';

function sendAlert(type, title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        confirmButtonColor: '#3EA4C4',
      })
}

export {
    sendAlert,
}