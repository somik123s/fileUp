var storedFiles = [];
function hasFile(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    filesArr.forEach(function(f) {
        var that = this;
        if(!f.type.match("image.*")) {
            return;
        }
        this.storedFiles.push(f);
        // console.log(this.storedFiles);
        var reader = new FileReader();
        reader.onload = function (e) {
            var html = "<img src=\"" + e.target.result + "\" data-file='"+f.name+"' onclick='removeFile(this)' class='selFile' height='50' width='50'><br clear=\"left\" />";
            $('#gallery').append(html);
        }
        reader.readAsDataURL(f);
    });
}
function removeFile(obj){
    var file = $(obj).data("file");
    for(var i=0;i<storedFiles.length;i++) {
            if(storedFiles[i].name === file) {
                storedFiles.splice(i,1);
                break;
            }
        }
        $(obj).remove();
}

function uploadPrescription (event) {

    event.preventDefault();

    // var that = this;
    // // $.ajaxSetup({
    // //     headers: {
    // //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    // //     }
    // // });
    var data = new FormData();
    // console.log(storedFiles.length);
    for (var i = 0, len = storedFiles.length; i < len; i++)
    {
        // console.log(storedFiles[i]);

        data.append('pimage[]', storedFiles[i]);
        // data.append('key', 'hi');
    }

    // console.log(data.entries());


    for (var pair of data.entries()) {
        // console.log(pair[0] + ', ' + pair[1]);
        console.log(pair[1]);
    }
    // if (this.storedFiles.length == 0) {
    //     swal({
    //         title: 'No image is selected',
    //         type: 'warning',
    //         allowOutsideClick: false
    //     }).then(function (result) {
    //         if (result.value) {
    //             window.history.back();
    //         }
    //     })
    // } else {
    //     $.ajax({
    //         url: 'upload-prescription',
    //         data: data,
    //         type: 'POST',
    //         dataType: 'json',
    //         cache: false,
    //         mimeType: "multipart/form-data",
    //         contentType: false,
    //         processData: false,
    //     }).done(function (resp) {
    //         if (resp.data) {
    //             swal({
    //                 title: 'Prescription has been uploaded',
    //                 type: 'success',
    //                 allowOutsideClick: false
    //             }).then(function (result) {
    //                 if (result.value) {
    //                     window.location.href = 'create-prescription';
    //                 }
    //             });
    //         }
    //     });
    // }

}